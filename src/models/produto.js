const mongoose = require('../database');

const ProdutoSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        require: true,
    },
    descricao:{
        type: String,
        require: true,
    },
    fabricante:{
        type: String,
        require: false,
    },
    nome:{
        type: String,
        require: true,
    },
    quantidadeEmEstoque:{
        type: Number,
        require: true,
    }
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;