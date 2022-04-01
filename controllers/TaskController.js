const Task = require('../models/Task');

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err));
  }

  static showTasks(req, res) {
    Task.findAll({ raw: true })
      .then((data) => {
        let emptyTasks = false;

        if (data.length === 0) {
          emptyTasks = true;
        }

        res.render('tasks/all', { tasks: data, emptyTasks });
      })
      .catch((err) => console.log(err));
  }

  static removeTask(req, res) {
    const { id } = req.body;

    Task.destroy({ where: { id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err));
  }

  static updateTask(req, res) {
    const { id } = req.params;

    Task.findOne({ where: { id }, raw: true })
      .then((data) => {
        res.render('tasks/edit', { task: data });
      })
      .catch((err) => console.log(err));
  }

  static updateTaskPost(req, res) {
    const { id } = req.body;

    const task = {
      title: req.body.title,
      description: req.body.description,
    };

    Task.update(task, { where: { id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err));
  }

  static toggleTaskStatus(req, res) {
    const { id } = req.body;

    console.log(req.body);

    const task = {
      done: req.body.done === '0',
    };

    console.log(task);

    Task.update(task, { where: { id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err));
  }
};
