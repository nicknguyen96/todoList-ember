const Todos = require('../models/todoModel');

class TodoController {
    async getAll(req, res) {
        try {
            const data = await Todos.find();
            return res.json({ status: 200, message: "getAll works", data });
            // res.send(data);
        } catch(error){
            console.log(error);
            return res.json({ status: 500, message: error.message });
        }
    }

    async createItem(req, res) {
        try {
            const { title, status, description } = req.body;
            console.log(req.body);
            if (!title || !status || !description) {
                throw new Error('input field cant be empty')
            }
            const newItem = await Todos.create({title,status, description});
            return res.json({status: 201, message: "Successfull create new Item", data: newItem})
        } catch (error){
            if (error.message == 'input field cant be empty') {
                return res.json({status: 400, message: error.message});
            }
            return res.json({status: 500, message: error.message})
        }
    }

    async getItem(req, res) {
        try {
            let {todo_id} = req.params;
            let data = await Todos.findById(todo_id);
            return res.json({status: 200, message:"Get item", data});
        } catch(error){
            return res.json({status: 500, message: error.message})
        }
    }

    async updateItem(req, res) {
        try {
            const {todo_id} = req.params;
            const body = req.body;
            let data = await Todos.findByIdAndUpdate(todo_id, body);
            return res.json({status: 200, message:"Update item", data});
        } catch(error){
            return res.json({status: 500, message: error.message})
        }
    }

    async deleteItem(req, res) {
        try {
            const {todo_id} = req.params;
            let data = await Todos.findByIdAndDelete(todo_id);
            return res.json({status: 200, message:"Delete item", data});
        } catch(error){
            return res.json({status: 500, message: error.message})
        }
    }
}

module.exports = new TodoController();