
exports.up = function(knex) {
  return knex.schema.createTable('message', function(table){
    table.increments('id').notNullable()
    table.text('title').notNullable()
    table.text('conteudo').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('message')
};
