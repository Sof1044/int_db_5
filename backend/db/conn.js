const { Sequelize } = require('sequelize')

const db = new Sequelize('localhost','root','senai',{
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
})

module.exports = db