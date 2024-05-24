import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/user/signup', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })
    const token = await sign({
      id: user.id
    }, c.env?.JWT_SECRET)
    return c.json({jwt: token})
  } catch(e){
    c.status(403)
    return c.json({error: "error while creating user"})
  }
})

app.post('/api/v1/user/signin', async(c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  try{
    const user = await Prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })
    if(!user){
      c.status(403)
      return c.json({error: "invalid credentials"})
    }
    const token = await sign({
      id: user.id
    }, c.env?.JWT_SECRET)
    return c.json({jwt: token})
  } catch(error){
    c.status(400)
    return c.json({error: "error while signing in"})
  }
})

app.post('/api/v1/blog', (c) => {
  return c.text('New Blog created!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Blog edited!')
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.text('Get a blog')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('All blogs fetched')
})


export default app
