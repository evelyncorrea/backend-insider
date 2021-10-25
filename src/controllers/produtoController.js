const express = require('express');

const Produto = require('../models/produto');

const router = express.Router();

router.post('/produto', async (req, res) => {
    const { id } = req.body;
    try{
        if(await Produto.findOne({id})) return res.send(400).send({error: 'id already exists'});
        const produto = await Produto.create(req.body.venda);

        return res.send(produto);
    }catch(error){
        return res.status(400).send({error: 'Failed'});
    }
})

module.exports = app => app.use('/prod', router);
