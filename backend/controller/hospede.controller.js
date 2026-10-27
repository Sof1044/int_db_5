const Hospede = require('../models/Hospede')

const cadastrar = async(req, res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.nome || !valores.email || !valores.senha || !valores.telefone){
        return res.status(400).json({message: 'Todos os campos são obrigatórios!'})
    }

    try{
        await Hospede.create(valores)
        res.status(200).json({message: 'Usuário cadastrado com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o hospede ',err)
        res.status(500).json({message: 'Erro ao cadastrar o hospede'})
    }
}
const consultar = async(req, res)=>{
    const id = req.params(id)
    console.log('O código do hóspede é: ',id)

    if(!id){
        return res.status(400).json({message: 'código é obrigatório!'})
    }

    try{
        const hospede = await Hospede.findByPk(id)

        if(!hospede){
          return res.status(404).json({message: 'Hospede não encontrado!'})
    }

        res.status(200).json(hospede)
    }catch(err){
        console.error('Erro ao consultar o hospede ',err)
        res.status(500).json({message: 'Erro ao consultar o hospede'})
    }
}
const listar = async(req, res)=>{
    const dados = req.body
    try{
        const dados = await Hospede.findAll(dados)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar o hospedes ',err)
        res.status(500).json({message: 'Erro ao listar o hospedes'})
    }
}
const apagar = async(req, res)=>{
    const id = req.params(id)
    console.log('O código do hóspede é: ',id)

    if(!id){
        return res.status(400).json({message: 'código é obrigatório!'})
    }

    try{
        const hospede = await Hospede.findByPk(id)

        if(!hospede){
          return res.status(404).json({message: 'Hospede não encontrado!'})
    }
        await hospede.destroy({where: {idHospede: id}})
        res.status(200).json({message: 'Hospede deletado com sucesso!'})
    }catch(err){
        console.error('Erro ao deletar o hospede ',err)
        res.status(500).json({message: 'Erro ao deletar o hospede'})
    }
}
// const atualizar = async(req, res)=>{
//     const id = req.params(id)
//     console.log('O código do hóspede é: ',id)

//     if(!id){
//         return res.status(400).json({message: 'código é obrigatório!'})
//     }

//     try{
//         const hospede = await Hospede.findByPk(id)

//         if(!hospede){
//           return res.status(404).json({message: 'Hospede não encontrado!'})
//     }
//         await hospede.destroy({where: {idHospede: id}})
//         res.status(200).json({message: 'Hospede deletado com sucesso!'})
//     }catch(err){
//         console.error('Erro ao deletar o hospede ',err)
//         res.status(500).json({message: 'Erro ao deletar o hospede'})
//     }
// }

// module.exports = {}