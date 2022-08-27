const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({

  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },

  user: {
    type: String, //tipo
    required: true //obrigatório
  },

  email: {
    type: String,
    required: true,
    unique: true //unico
  },

  pwd: {
    type: String,
    required: true
  }
}, { timestamps: true }) //add automaticamente createdAte updatedAt


module.exports = mongoose.model('usuario', usuarioSchema)