export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    { id: 1, message: 'Welcome' },
    { id: 2, message: 'To the chat box' },
    { id: 3, message: 'Where everyone can chat' }
  ])
}
