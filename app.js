const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
  
    res.send('Hello World from Awesome-O. Awesome-O is type 7 (enthusiast), so Awesome-O can have a hard time focusing on one thing for too long; Awesome-O is usually optimistic and surprisingly creative, however.')
})
//app.listen(3000)

app.listen(port, () => {
  console.log(`Michael listening on port ${port}`)
})
