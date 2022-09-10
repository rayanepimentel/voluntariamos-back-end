const mongoose = require('mongoose')

const eventoSchema = {
  
  nomeEvento: String,

  tipo: String,

  local: {
    cidade: String,
    estado: String,
  },

  data: Date,

  turnoHoras: String,

  recorrente: Boolean,

  linkInscricao: String,

  label: String
  
}

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
  },

  eventos: [eventoSchema]

}, { timestamps: true }) //add automaticamente createdAte updatedAt


module.exports = mongoose.model('usuario', usuarioSchema)