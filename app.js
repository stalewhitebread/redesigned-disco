const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
  
    res.send('Hello World from Awesome-O. Awesome-O is type achiever, so Awesome-O can be too competitive sometimes. Awesome-O is nothing but "authentic", however.')
})
//app.listen(3000)

app.listen(port, () => {
  console.log(`Michael listening on port ${port}`)
})