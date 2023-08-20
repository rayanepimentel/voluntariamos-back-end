const ModelUsuario = require("../models/userModel");
const bcrypt = require("bcryptjs");

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
  const { user, email, pwd } = req.body;

  if (!user || !email || !pwd) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  const encryptedPassword = await bcrypt.hash(pwd, 10);

  try {
    const novoUsario = new ModelUsuario({
      user: user,
      email: email,
      pwd: encryptedPassword,
    });

    const novoUsarioSave = await novoUsario.save();
    res.status(201).json(novoUsarioSave._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).json({ message: "Dado inválido!" });
  }

  if (req.body?.pwd) {
    req.body.pwd = await bcrypt.hash(req.body.pwd, 10);
  }

  try {
   eval(`await ModelUsuario.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    ).exec();`);

    res.status(200).json({ message: "Usuario editado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  criarUsuario,
  editarUsuario,
};
