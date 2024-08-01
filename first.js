require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/alchemy', (req, res) => {
  res.send("Welcome to your alchemy webpage")
})

app.get('/google',(req, res) => {
  res.send("<h2>chai aur pakode</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})