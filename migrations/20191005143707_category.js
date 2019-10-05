
exports.up = (knex, Promise) => {
    return knex.schema.createTable('category', (table) => {
      table.increments();
      table.text('title').notNullable();
      table.text('description').notNullable();
      table.text('image_url').notNullable();
    });
  };

  exports.down = (knex, Promise) => {
      return knex.schema.dropTable('category');
  };
