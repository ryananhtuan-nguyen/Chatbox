export function up(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id')
    table.string('message')
  })
}

export function down(knex) {
  return knex.schema.dropTable('messages')
}
