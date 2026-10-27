const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Hospede = db.define('Hospede',{
    idHospede: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'hospedes'
})

module.exports = Hospede