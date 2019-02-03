const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  console.log(`\n${req.method}: ${req.url}`)
  next()
})

app.use((req, res, next) => {
  if(req.query.api_key){
    next()
  }
  else{
    res.status(401).send('invalid api key\n')
  }
})

app.get('/', (req, res) => {
  res.send('hello world\n')
})

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send(`hello user ${JSON.stringify(req.body)}\n`)
})

app.get('/all', (req, res, next) => {
  console.log('inline middleware')
  next(new Error('oops!'))
}, (req, res) => {
  res.send('all\n')
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})

app.listen(3000)
