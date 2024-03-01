const Contact = require("./contact")
const User = require("./user")
//reletion with user
// User.hasOne(Contact, { foreignKey: "userId", as: "contact_info" })
User.hasOne(Contact)
Contact.belongsTo(User)

// //create many to many releations
// User.belongsToMany(Contact, { through: "user_contacts" })
// Contact.belongsToMany(User, { through: "user_contacts" })