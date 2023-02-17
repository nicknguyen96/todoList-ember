const todoRouter = require('express').Router();
const TodoController = require('../controllers/TodoController');

todoRouter.get('/', TodoController.getAll);
todoRouter.get('/:todo_id', TodoController.getItem);
todoRouter.post('/', TodoController.createItem);
todoRouter.put('/:todo_id', TodoController.updateItem);
todoRouter.delete('/:todo_id', TodoController.deleteItem);

module.exports = todoRouter;