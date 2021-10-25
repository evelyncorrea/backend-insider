const express = require('express');

const Venda = require('../models/venda');

const router = express.Router();

router.post('/venda', async (req, res) => {

    try{
        const venda = await Venda.create(req.body.venda);

        return res.send(venda);
    }catch(error){
        return res.status(400).send({error: 'Failed'});
    }
})

module.exports = app => app.use('/ven', router);
