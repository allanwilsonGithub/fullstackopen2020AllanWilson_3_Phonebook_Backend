require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('id', function getId (req) {
  return req.id
})

morgan.token('content', function (req, res) {
  return JSON.stringify(req.body)
})

app.use(morgan(':id :method :url :response-time :content'))

app.get('/', (req, res) => {
  res.send('<h1>Persons Backend</h1>')
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
  res.json(persons)
  })
})

app.get('/info', (req, res) => {
    res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${Date()}</p>
    `)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body


  if (!body.name) {
    return res.status(400).json({ 
      error: 'name missing'
    })
    } else if (!body.number) {
      return res.status(400).json({
            error: 'number missing'
    })
  }

  const person = new Person({
      name: body.name || false,
      number: body.number || false
    })
  
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })

  })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})