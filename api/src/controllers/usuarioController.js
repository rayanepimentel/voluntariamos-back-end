const modelUsario = require("../models/usarioModel.json");

const criarUsuario = (req, res) => {
  const { user, email, pwd } = req.body;

  if(!user || !email || !pwd) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
  }

  const novoUsario = {
    user: user,
    email: email,
    pwd: pwd,
  }

  modelUsario.push(novoUsario);

  res.status(200).send(novoUsario);
};

module.exports = {
  criarUsuario,
};
