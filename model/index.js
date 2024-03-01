const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employeedb', 'root', "", {
    host: 'localhost',
    dialect: "mysql",
    logging: false,
    port: 3306
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()



module.exports = { sequelize }