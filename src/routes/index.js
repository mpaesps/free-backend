import express from "express";
import users from "../routes/usersRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => 
        res.status(200).send("oi")
    )

    app.use(express.json(), users)
}

export default routes