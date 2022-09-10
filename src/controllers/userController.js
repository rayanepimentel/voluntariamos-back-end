const ModelUsuario = require("../models/userModel");

/**
 * Criando uma conta
 * @param {object} req - A requisição
 * @param {string} res - A resposta
 * @param {string} req.body.user - O user do usuario.
 * @param {string} req.body.email - O e-mail de login.
 * @param {string} req.body.pwd - A senha de login.
 * @return {string} Mensagem com a conta criada.
 */

const criarUsuario = async (req, res) => {
  const { user, email, pwd } = req.body

  if (!user || !email || !pwd) {
    return res.status(400).json({ message: "Dados inválidos" })
  }

  try {
    const novoUsario = new ModelUsuario({
      user: user,
      email: email,
      pwd: pwd,
    })

    const novoUsarioSave = await novoUsario.save()
    res.status(201).json(novoUsarioSave._id)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

/**
 * Editar conta
 * @param {string} req.params.id - O _id da conta
 * @param {string} req.body.user - O user do usuario.
 * @param {string} req.body.email - O e-mail de login.
 * @param {string} req.body.pwd - A senha de login.
 * @return {string} Retorna mensagem de edição
 */

const editarUsuario = async (req, res) => {
  const id = req.params.id

  if (!req.body) {
    return res.status(400).json({ message: "Dado inválido!" })
  }

  try {
    await ModelUsuario.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    ).exec()

    res.status(200).json({ message: "Usuario editado com sucesso!" })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Criar evento
 * @param {string} req.body.id - O _id da conta/usuario
 * @param {object} req.body.evento - Objeto do evento.
 * @return {string} Retorna mensagem de criação.
 */

const criarEvento = async (req, res) => {
  const { id, eventos } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Dado inválido!" })
  }
  
  try {
    await ModelUsuario.findByIdAndUpdate(
      { _id: id },
      { $push: {
        eventos: eventos
      } },
      { new: true }
    ).exec()

    res.status(200).json({ message: "Evento criado com sucesso!" })

  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  criarEvento,
  criarUsuario,
  editarUsuario,
}