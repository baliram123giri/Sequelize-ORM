const Contact = require("../../model/contact");
const User = require("../../model/user")

async function CreateUser(req, res) {
    try {
        let user;
        if (Array.isArray(req.body)) {
            user = await User.bulkCreate(req.body)
        } else {
            user = await User.create(req.body)
        }
        return res.json(user)

    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

//get user
async function findByIdUser(req, res) {
    try {
        const user = await User.findByPk(Number(req.params.id))
        return res.json(user || null)
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

//get All
async function findAllUser(req, res) {
    try {
        const users = await User.findAll({
            include: Contact
        })
        return res.json(users || [])
    } catch (error) {
        console.log(error)
        return res.status(500).json(error?.message)
    }
}
//Delete by id 
async function deleteByUserId(req, res) {
    try {
        const { id } = req.params
        await User.destroy({
            where: { id: Number(id) }
        })
        await Contact.destroy({ where: { UserId: Number(id) } })
        return res.json({ message: "User Delete Successfully" })
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

//Update by id 
async function updateByUserId(req, res) {
    try {
        const [user] = await User.update(req.body, {
            where: { id: Number(req.params.id) }
        })
        if (!user) return res.status(404).json({ message: "User not found!" })
        return res.json({ message: "User Updated Successfully" })
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

module.exports = { CreateUser, findByIdUser, findAllUser, deleteByUserId, updateByUserId }