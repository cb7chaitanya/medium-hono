import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Signup successful!')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Signin successful!')
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
