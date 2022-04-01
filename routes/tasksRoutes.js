const { Router } = require('express');
const TaskController = require('../controllers/TaskController');

const router = Router();

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.get('/edit/:id', TaskController.updateTask);
router.post('/edit', TaskController.updateTaskPost);
router.post('/updatestatus', TaskController.toggleTaskStatus);
router.get('/', TaskController.showTasks);
module.exports = router;
