import request from 'superagent'

const rootUrl = '/api/v1/messages'

export async function getMessage() {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addMessage(message: string) {
  return await request.post(rootUrl).send({ message: message })
}
