const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/test', function (req, res) {
    res.send('hello test')
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT)