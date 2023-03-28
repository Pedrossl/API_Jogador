import { sequelize } from "../databases/conecta.js";
import { Jogador } from "../models/Jogador.js";

export const JogadorIndex = async (req, res) => {
    try {
      const jogadors = await Jogador.findAll();
      res.status(200).json(jogadors)
    } catch (error) {
      res.status(400).send(error)
    }
  }