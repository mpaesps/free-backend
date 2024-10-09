import express, { Router } from "express"
import UserController from "../controllers/userController.js"

const routes = express.Router()

routes.post("/users", UserController.createUser)

export default routes