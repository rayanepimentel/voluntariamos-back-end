const modelUsuario = require('../models/userModel')


const criarUsuario = async (req, res) => {
  const { user, email, pwd } = req.body

  if (!user || !email || !pwd) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' })
  }

  try {
    const novoUsario = new modelUsuario({
      user: user,
      email: email,
      pwd: pwd
    })

    const novoUsarioSave = await novoUsario.save()
    res.status(201).json(novoUsarioSave)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }


};

module.exports = {
  criarUsuario,
};