const todoModel = require('../models/todo.model');

exports.getTodos = (req, res) => {
    res.status(200).json(todoModel.todos);
};

exports.createTodo = (req, res) => {
    const newTodoText = req.body.text;
    if (!newTodoText) {
        return res.status(400).json({ error: "To-Do metni boş olamaz!" });
    }

    const newTodo = {
        id: todoModel.nextId++,
        text: newTodoText,
        completed: false
    };

    todoModel.todos.push(newTodo);
    res.status(201).json(newTodo);
};

exports.deleteTodo = (req, res) => {
    const todoId = parseInt(req.params.id);
    const initialLength = todoModel.todos.length;

    todoModel.todos = todoModel.todos.filter(todo => todo.id !== todoId);

    if (todoModel.todos.length === initialLength) {
        return res.status(404).json({ error: "To-Do bulunamadı." });
    }

    res.status(204).send();
};