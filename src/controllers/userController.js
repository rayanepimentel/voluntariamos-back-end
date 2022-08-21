const modelUsuario = require('../models/userModel.json')

const criarUsuario = (req, res) => {
  const { user, email, pwd } = req.body
  
  //verifica se tem algum campo vazio
  if (!user || !email || !pwd) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' })
  }

  const novoUsario = {
    user: user,
    email: email,
    pwd: pwd,
  }


  modelUsuario.push(novoUsario)

  res.status(200).send(novoUsario)
};

module.exports = {
  criarUsuario,
};