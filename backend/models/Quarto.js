const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Quarto = db.define('Quarto',{
    idQuarto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    idHospede: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            Key: 'idHospede',
            models: 'Hospede'
        }
    },
    numQuarto: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    numDias: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorDiaria: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'quartos'
})


module.exports = Quarto