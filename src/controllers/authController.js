const ModelUsuario = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Login
 * @param {object} req - A requisição
 * @param {string} res - A resposta
 * @param {string} req.body.email - O e-mail de login.
 * @param {string} req.body.pwd - A senha de login.
 * @return {string} JWT de autenticação.
 */

const validarUsuario = async (req, res) => {
  const { email, pwd } = req.body;

  if (!email || !pwd) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  try {
    const user = await ModelUsuario.findOne({ email }).exec();

    if (await bcrypt.compare(pwd, user.pwd)) {
      const accessToken = jwt.sign(
        { email, userName: user.email },
        process.env.JWT_SECRET,
        { expiresIn: 300 } // 5 min
      );
      res.status(201).json({ accessToken });
    }

    res.status(400).json({ message: "Email ou Senha invalido" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  validarUsuario,
};
