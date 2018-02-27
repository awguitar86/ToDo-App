const TodoItem = require('../../.server/models').TodoItem;

module.exports = {
    create(req, res) {
        return TodoItem
            .create({
                content: req.body.content,
                todoId: req.params.todoId,
            })
            .then(todoItem => req.status(201).send(todoItem))
            .catch(error => res.status(400).send(error));
    },
};