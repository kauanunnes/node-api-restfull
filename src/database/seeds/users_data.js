
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Kevin', login: 'kevin', password: '123456', phone: ['555666'], job: 4, admin: true},
        {name: 'Kaio', login: 'kaio', password: '123456', phone: ['555666'], job: 4, admin: false},
      ]);
    });
};
