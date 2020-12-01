import express from "express";
import consultingsModel from "./models/consultings";

// Importando os models do banco
import contactsModel from "./models/contacts";
import newsletterModel from "./models/newsletter";
import portfolioModel from "./models/portfolio";

const Router = express.Router();

// Rotas da aplicação
Router.get("/", async (request, response) => {
  return response.json({ welcome: "to goncaz api serverless for website" });
});

// ### Enpoins dos contactos

/**
 * GET /contacs
 * Lista todos contactos deixados
 */
Router.get("/contacts", async (request, response) => {
  try {
    const data = await contactsModel.find();
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

/**
 * POST /contacs
 * Cria um novo contacto
 */
Router.post("/contacts", async (request, response) => {
  try {
    const { email } = request.body;
    const create = await contactsModel.create({ email });

    return create;
  } catch (error) {
    if (error.message.split(" ")[1] === "duplicate") {
      return response
        .status(400)
        .json({ error: "já existe um assinante com este email" });
    }
    return response.status(500).json({ error: error.message });
  }
});

// ### Enpoints da newsletter

/**
 * GET /newsletter
 * Lista todos os contactos da newsletter
 */
Router.get("/subscriptions", async (request, response) => {
  try {
    const data = await newsletterModel.find();
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});
/**
 * POST /newsletter
 * Cria um novo assinante da newsletter
 */
Router.post("/subscriptions", async (request, response) => {
  try {
    const { email } = request.body;
    const subscribe = await newsletterModel.create({ email });

    return subscribe;
  } catch (error) {
    if (error.message.split(" ")[1] === "duplicate") {
      return response
        .status(400)
        .json({ error: "já existe um assinante com este email" });
    }
    return response.status(500).json({ error: error.message });
  }
});

// ### Endponts de petições de portfolio

/**
 * GET /orders
 * Lista todos os contactos da que querem receber o portfolio
 */

Router.get("/orders", async (request, response) => {
  try {
    const data = await portfolioModel.find();
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});
/**
 * POST /newsletter
 * Lista todos os contactos da newsletter
 */
Router.post("/orders", async (request, response) => {
  try {
    const { email } = request.body;
    const subscribe = await portfolioModel.create({ email });

    return subscribe;
  } catch (error) {
    if (error.message.split(" ")[1] === "duplicate") {
      return response
        .status(400)
        .json({ error: "já existe um assinante com este email" });
    }
    return response.status(500).json({ error: error.message });
  }
});

// ### Endponts de agendamento de consultoria

/**
 * GET /orders
 * Lista todos os contactos da que querem receber o portfolio
 */

Router.get("/consultings", async (request, response) => {
  try {
    const data = await consultingsModel.find();
    return response.json(data);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});
/**
 * POST /newsletter
 * Lista todos os contactos da newsletter
 */
Router.post("/consultings", async (request, response) => {
  try {
    const { email } = request.body;
    const subscribe = await consultingsModel.create({ email });

    return subscribe;
  } catch (error) {
    if (error.message.split(" ")[1] === "duplicate") {
      return response
        .status(400)
        .json({ error: "já existe um assinante com este email" });
    }
    return response.status(500).json({ error: error.message });
  }
});

export default Router;
