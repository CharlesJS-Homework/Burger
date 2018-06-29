const burger = require('../models/burger.js');

function displayError(res, err) {
  res.json(err);
}

function list(res) {
  burger.list()
    .then(burgers => res.render('index', { burgers }))
    .catch(err => displayError(res, err));
}

module.exports = (app) => {
  app.get('/api/list', (req, res) => {
    burger.list()
      .then(burgers => res.json(burgers))
      .catch(err => displayError(res, err));
  });

  app.post('/api/add', (req, res) => {
    burger.add(req.body.name)
      .then(() => list(res))
      .catch(err => displayError(res, err));
  });

  app.put('/api/eat', (req, res) => {
    burger.eat(req.body.id)
      .then(() => list(res))
      .catch(err => displayError(res, err));
  });

  app.get('*', (req, res) => { list(res); });
};
