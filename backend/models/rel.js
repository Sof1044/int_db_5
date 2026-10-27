const Hospede = require('./Hospede') // importando o modelo Produto
const Quarto = require('./Quarto')

Hospede.hasMany(Quarto,{ // O usuário tem muitos produtos
    foreignKey: 'idHospede',
    as: 'quartoHospede',
    onDelete: 'CASCADE'
})
Quarto.belongsTo(Hospede,{ // O produto pertence a um usuário
    foreignKey: 'idQuarto',
    as: 'hospedeQuarto',
    allowNull: false
})

module.exports = { Hospede, Quarto }