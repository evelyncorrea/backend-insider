const mongoose = require('../database');

const VendaSchema = new mongoose.Schema({
    idVenda:{
        type: Number,
        require: true
    },
    idProduto:{
        type: Number,
        require: true
    },
    matriculaFuncionario:{
        type: Number,
        require: true
    },
    quantidadeProdutos:{
        type: Number,
        require: true
    }
})

const Venda = mongoose.model('Venda', VendaSchema);

module.exports = Venda;