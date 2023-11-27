const express = require('express')
const teacherrouter = require('./router/teachers')
const app = express()
const port = 3001
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(teacherrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})