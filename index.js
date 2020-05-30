const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(express.json())

morgan.token('id', function getId (req) {
  return req.id
})

app.use(morgan(':id :method :url :response-time: '))
let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
  
  app.get('/', (req, res) => {
    res.send('<h1>Persons Backend</h1>')
  })
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
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

  const generateRandomId = () => {
    return Math.floor(Math.random() * Math.floor(9999));
  }

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
    } else if (persons.find(person => person.name === body.name)) {
      return res.status(400).json({
            error: 'name already exists'
      })
    }

  
    const person = {
      content: body.content,
      name: body.name || false,
      number: body.number || false,
      id: generateRandomId(),
    }
  
    persons = persons.concat(person)
  
    res.json(person)
  })

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)