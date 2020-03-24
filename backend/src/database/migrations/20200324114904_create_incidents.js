
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        //primary key automatica 
        table.increments();
        //campos dos incidentes
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //chave estrangeira da tabala ongs
        table.string('ong_id').notNullable();

        //dizendo que a coluna ong_id tem referencia a tabela ongs  
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
