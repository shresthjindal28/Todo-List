const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    task: String
});

const model = mongoose.model('todos', Schema);

module.exports = model;