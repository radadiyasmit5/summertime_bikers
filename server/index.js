import express from "express"
import path from "path"
import next from "next"
const dev = process.env.NODE_ENV !== "production"
const nextApp = next({dev})
const handle = nextApp.getRequestHandler()
// console.log(__dirname)

nextApp.prepare().then(() => {
  const app = express()
  // Serve static assets

  app.use(express.static(path.join(__dirname, ".next/static")))
  // Handle Next.js routes
  app.all("*", (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
