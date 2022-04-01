const express = require('express');
const exphbs = require('express-handlebars');

const coonectionDB = require('./db/conn');

// import Models
// eslint-disable-next-line no-unused-vars
const Task = require('./models/Task');

// import Routes
const taskRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// handlebars config
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/tasks', taskRoutes);

coonectionDB
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('http://localhost:3000');
    });
  })
  .catch((err) => console.log(err));
