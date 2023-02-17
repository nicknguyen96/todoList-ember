const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
},
    { timestamps: true }
);

module.exports = model('Todo', todoSchema, 'Todo');