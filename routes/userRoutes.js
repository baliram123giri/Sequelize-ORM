const { CreateUser, findByIdUser, findAllUser, deleteByUserId, updateByUserId } = require("../controllers/user/userController")

const Router = require("express").Router()

Router.post("/create", CreateUser)
Router.get("/list", findAllUser)
Router.get("/:id", findByIdUser)
Router.delete("/delete/:id", deleteByUserId)
Router.put("/update/:id", updateByUserId)
//add 
module.exports = Router