const express = require('express');
const cors = require('cors');
const YAML = require('yamljs');


const app = express();
const PORT = process.env.PORT || (process.env.NODE_ENV === 'test' ? 3001 : 3000);

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('uncaughtException', error => {
  console.log('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('beforeExit', () => {
  app.close((err) => {
    if (err) console.error(JSON.stringify(error), error.stack)
  });
})

// middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))
app.use('/project', require('./routes/project.routes.js'));

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something Broke!');
})
app.set('x-powered-by', false)

// set port, listen for requests
const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Server is running on port ' + PORT);
  }
});

module.exports = server;
