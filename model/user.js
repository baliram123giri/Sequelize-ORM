const { DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { hash, hashSync } = require("bcrypt");

const User = sequelize.define("user", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            return this.getDataValue("firstName").toUpperCase()
        },
        unique: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password1: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("password1", hashSync(value, 10))
        }
    },
    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.firstName} ${this.lastName}`
    //     },
    //     set() {
    //         throw new Error("Dont add this col")
    //     }
    // },
    mobile: DataTypes.STRING
}, {
    tableName: "users",
    // paranoid: true,
    // deletedAt: "soft_delete"
})
// User.sync({ alter: true })
module.exports = User 