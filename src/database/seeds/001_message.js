
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {title: 'Bruno', conteudo: 'Eai, blz?' },
        {title: 'Victor', conteudo: 'Eai, suave?' },
        {title: 'Cristian', conteudo: 'Eai, tranquilo?' }
      ]);
    });
};
