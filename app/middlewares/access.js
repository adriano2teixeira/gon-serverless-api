import dotenv from "dotenv";
import { next } from "sucrase/dist/parser/tokenizer";

dotenv.config();
const hash = process.env.SECRET;

export default async function access_control(request, response, next) {
  try {
    const key = request.headers["api-key"];

    if (!key)
      return response
        .status(403)
        .json({ error: "você não tem uma chave de acesso válida" });

    if (key === hash) return await next();
    else
      return response
        .status(403)
        .json({ error: "você não tem uma chave de acesso válida" });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
