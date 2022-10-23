const ModelUsuario = require("../models/userModel");

/**
 * Criar evento
 * @param {string} req.body.id - O _id da conta/usuario
 * @param {object} req.body.evento - Objeto do evento.
 * @return {string} Retorna mensagem de criação.
 */

const criarEvento = async (req, res) => {
  const { id, eventos } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Dado inválido!" });
  }

  try {
    await ModelUsuario.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          eventos: eventos,
        },
      },
      { new: true }
    ).exec();

    res.status(200).json({ message: "Evento criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Exibir eventos
 * @return {object} Retorna eventos.
 */

const exibirEventos = async (req, res) => {
  try {
    const listaEventos = await ModelUsuario.find({ nomeEvento: { $exists: true }, }, { eventos: true });

    res.status(200).json(listaEventos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * 
 * @param {string} req.params.id - O identificador do usuário
 * @param {object} req.body.evento - Objeto do evento.
 * @returns {string} Retorna mensagem de edição
 */
const editarEvento = async (req, res) => {
  const idUsuario = req.params.id;
  const { evento } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Dado inválido!" });
  }

  try {
    await ModelUsuario.updateOne(
      { _id: idUsuario, 'eventos._id': evento._id },
      { $set: { 'eventos.$': evento } },
    ).exec();

    res.status(200).json({ message: "Evento editado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * 
 * @param {string} req.params.id - O identificador do usuário
 * @param {string} req.params.idEvento - O identificador do evento
 * @return {object} - Retorno de mensagem de exclusão 
 */

const excluirEvento = async (req, res) => {
  const idUsuario = req.params.id;
  const idEvento = req.params.idEvento;

  try {
    await ModelUsuario.updateOne(
      { _id: idUsuario },
      { $pull: { eventos: { _id: idEvento } } }
    ).exec();

    res.status(200).json({ message: "Evento excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  criarEvento,
  exibirEventos,
  editarEvento,
  excluirEvento
}