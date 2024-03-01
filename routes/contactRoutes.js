const { CreateContact, findAllContact, findByIdContact, deleteByContactId, updateByContactId } = require("../controllers/user/contactController")

const Router = require("express").Router()

Router.post("/create", CreateContact)
Router.get("/list", findAllContact)
Router.get("/:id", findByIdContact)
Router.delete("/delete/:id", deleteByContactId)
Router.put("/update/:id", updateByContactId)
//add 
module.exports = Router