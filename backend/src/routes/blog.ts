import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { updateBlogInput, createBlogInput } from "@cb7chaitanya/common-medium";

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: { 
        userId: string; 
    }
}>();


blogRouter.use("/*", async(c, next)=>{
    const authHeader = c.req.header("Authorization") || ""
    try{
        const res = await verify(authHeader, c.env?.JWT_SECRET)
        if(res.id){
            // @ts-ignore : TODO FIX THIS 
            c.set("userId", res.id)
            await next()
        } else{
            c.status(403)
            return c.text("Unauthorized")
        }
    } catch(e){
        c.status(403)
        return c.text("Unauthorized")
    }
})

blogRouter.post('/', async(c)=>{
    const body = await c.req.json()
    const {success} = createBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid Inputs"
        })
    }
    const authorId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
        c.status(200)
        return c.json({
            id: blog.id,
            "message": "Blog created successfully"
        })
    } catch(e){
        c.status(400)
        return c.json({error: "error while creating blog"})
    }
})

blogRouter.get('/bulk', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blogs = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        c.status(200)
        return c.json({
            blogs,
            "message": "Blogs fetched successfully"
        })
    } catch(e){
        c.status(400)
        return c.json({error: "error while getting blogs"})
    }
})

blogRouter.get('/:id', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.findUnique({
            where: {
                id: c.req.param('id')
            },
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        c.status(200)
        return c.json({
            blog,
            "message": "Blog fetched successfully"
        })
    } catch (e){
        c.status(400)
        return c.json({error: "error while getting blog"})
    }
})

blogRouter.put('/:id', async(c)=>{
    const body = await c.req.json()
    const {success} = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid Inputs"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.update({
            where: {
                id: c.req.param('id')
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        c.status(200)
        return c.json({
            id: blog.id,
            "message": "Blog edited successfully"
        })
    } catch(e){
        c.status(400)
        return c.json({error: "error while editing blog"})
    }
})