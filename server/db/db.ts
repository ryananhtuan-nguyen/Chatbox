import connection from './connection'

export async function getMessage(db = connection) {
  return await db('messages').select()
}
export async function addMessage(message: string, db = connection) {
  const count = await db('messages').count('id as count').first()
  if (count) {
    if (Number(count.count) > 10) {
      await db('messages').del()
      await db('messages').insert([
        { id: 1, message: 'Welcome' },
        { id: 2, message: 'To the chat box' },
        { id: 3, message: 'Where everyone can chat' },
      ])
    }
  }
  return await db('messages').insert({ message: message })
}
