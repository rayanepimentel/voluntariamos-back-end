require('dotenv').config()
const mongoose = require('mongoose')
const DATABASE_URI = process.env.DB_URI


const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Banco conectado! ')
  } catch (error) {
    console.error(error)
  }
}

module.exports = { connect }