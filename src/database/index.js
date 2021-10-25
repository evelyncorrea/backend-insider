const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://erickfragacd:fraga321@cluster0.jatau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => {consoler.error(error)});
db.once("Oper", () => console.log("Connected to MongoDB"))


module.exports = mongoose;