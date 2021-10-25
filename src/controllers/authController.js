const express = require('express');

const Funcionario = require('../models/funcionario');

const router = express.Router();

router.post('/func', async (req, res) => {
    const { email } = req.body;
    const {matricula} = req.body;

    try{
        
        if (await Funcionario.findOne({matricula}))
            return res.send(400).send({error: 'User already exist'});
        if(await Funcionario.findOne({email}))
            return res.send(400).send({error: 'Email alredy exist'});

        const funcionario = await Funcionario.create(req.body.funcionario);

        return res.send(funcionario);
    }catch(error){
        return res.status(400).send({error: 'Registration Failed'});
    }
})

module.exports = app => app.use('/auth', router);
