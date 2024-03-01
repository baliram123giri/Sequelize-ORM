const Contact = require("../../model/contact");

async function CreateContact(req, res) {
    try {
        let contact;
        if (Array.isArray(req.body)) {
            contact = await Contact.bulkCreate(req.body)
        } else {
            contact = await Contact.create(req.body)
        }
        return res.json(contact)
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

//get Contact
async function findByIdContact(req, res) {
    try {
        const contact = await Contact.findByPk(Number(req.params.id))
        return res.json(contact || null)
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}
//get All
async function findAllContact(req, res) {
    try {
        const contacts = await Contact.findAll()
        return res.json(contacts || [])
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}
//Delete by id 
async function deleteByContactId(req, res) {
    try {
        await Contact.destroy({
            where: { id: Number(req.params.id) }
        })
        return res.json({ message: "Contact Delete Successfully" })
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}
//Update by id 
async function updateByContactId(req, res) {
    try {
        const [contact] = await Contact.update(req.body, {
            where: { id: Number(req.params.id) }
        })
        if (!contact) return res.status(404).json({ message: "Contact not found!" })
        return res.json({ message: "Contact Updated Successfully" })
    } catch (error) {
        return res.status(500).json(error?.message)
    }
}

module.exports = { CreateContact, findByIdContact, findAllContact, deleteByContactId, updateByContactId }