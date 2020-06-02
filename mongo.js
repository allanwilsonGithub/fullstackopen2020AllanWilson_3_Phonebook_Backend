const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const input_name = process.argv[3]
const input_number = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-6rmsl.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', noteSchema)

const person = new Person({
  name: `${input_name}`,
  number: `${input_number}`,
})

if (input_name) {
  person.save().then(result => {
    console.log(`added ${input_name} number ${input_number} to phonebook`)
    mongoose.connection.close()
   })
   } else {
     console.log('woohoo')
   }
