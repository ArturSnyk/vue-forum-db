exports.up = knex => {
  return knex.schema.alterTable('category', (table) => {
    table.text('image_url').nullable().alter();
  });
};

exports.down = knex => {
  return knex.schema.alterTable('category', table => {
    table.text('image_url').notNullable().alter();
  });
};
