const express = require('express')
const app = express()
const port = 3000

// Array for 8 Ball App
const magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

// Magic 8 Ball App

app.get('/magic/:question', (req, res) => {
    res.send(`<h2>${req.params.question}?</h2><h1>${magicArr[Math.floor(Math.random() * 20)]}</h1>`)
})


app.listen(port, () => {
    console.log('It is working')
})