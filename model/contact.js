const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const User = require("./user");

const Contact = sequelize.define("contacts", {
    permanent_address: DataTypes.STRING,
    current_address: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        references: { model: User, key: "id" }
    }
}, {
    tableName: "contacts",
    // paranoid: true,
    // deletedAt: "soft_delete"
})

Contact.sync({ alter: true })

module.exports = Contact 