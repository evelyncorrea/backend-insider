const mongoose = require('../database');

const FuncionarioSchema = new mongoose.Schema({
    matricula:{
        type: Number,
        unique: true,
        require: true,
    },
    name: {
        type: String,
        require: true,

    },
    cargo:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    telefone:{
        type: String,
        require: true,
    }
});


const Funcionario = mongoose.model('Funcionario', FuncionarioSchema);

module.exports = Funcionario;