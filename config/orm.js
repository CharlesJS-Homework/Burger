const conn = require('./connection.js');

module.exports = {
  selectAll: () => new Promise((resolve, reject) => {
    conn.query('SELECT * FROM burgers', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  }),

  insertOne: (name, devoured) => new Promise((resolve, reject) => {
    const eaten = (() => {
      if (devoured === undefined) {
        return false;
      }

      return devoured;
    })();

    conn.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [name, eaten], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }),

  updateOne: (id, name, devoured) => new Promise((resolve, reject) => {
    const sets = [];
    const params = [];

    if (name) {
      sets.push('name = ?');
      params.push(name);
    }

    if (devoured !== undefined && devoured !== null) {
      sets.push('devoured = ?');
      params.push(devoured);
    }

    if (sets.length === 0) {
      reject(Error('Come on, you have to actually update something'));
      return;
    }

    params.push(id);

    const query = `UPDATE burgers SET ${sets.join(', ')} WHERE id = ?`;

    conn.query(query, params, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  }),
};
