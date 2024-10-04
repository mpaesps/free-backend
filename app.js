import express from "express";
import databaseConnection from "./src/config/dbConnect";
import dotenv from 'dotenv';
import routes from "./src/routes/index.js";

dotenv.config()
const connection = await databaseConnection();

connection.on("error", (erro) => {
    console.error("erro ao conectar com banco de dados", erro);
})

connection.once("open", () => {
    console.log("Conexão com banco estabelecida")
})

const app = express()
routes(app);

export default app