const express = require('express')
const app = express()
const port = 3000

// Greetings App

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}</h1>`)
})

// Tip Calculator App

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>${req.params.total * (req.params.tipPercentage/100)}</h1>`)
})


app.listen(port, () => {
    console.log('It is working')
})