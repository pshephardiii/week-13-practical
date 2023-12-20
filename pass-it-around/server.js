const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">take one down, pass it around</a>')
})

app.get('/:number_of_bottles', (req, res) => {
    let nextPage = req.params.number_of_bottles - 1
    if (req.params.number_of_bottles > 0) {
      res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1><a href="/${nextPage}">take one down, pass it around</a>`)
    } else {
      res.send('<h1>0 Bottles of beer on the wall</h1><a href="/">start over</a>')
    }
})

app.listen(3001, () => {
    console.log("I'm ready")
})