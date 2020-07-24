
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, role_id: 1, username: 'admin', password: 'password' },
        { id: 2, role_id: 2, username: 'moderator', password: 'password' },
        { id: 3, role_id: 3, username: 'user', password: 'password' }
      ]);
    });
};
