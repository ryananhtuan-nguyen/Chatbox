import { useMessages } from '../hooks/useMessages.ts'
import EachLine from './EachLine.tsx'
import { useState } from 'react'
import Nav from './Nav'
import * as customHook from '../hooks/useMessages.ts'
function App() {
  const { data } = useMessages()
  const [currentUser, setCurrentUser] = useState('')
  const [chat, setChat] = useState('')
  const useCustom = customHook.useCustomMutation()
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      useCustom.addMutation.mutate(chat)
      setChat('')
    }
  }
  console.log(currentUser)
  return (
    <>
      <Nav setUser={setCurrentUser} />
      <div className="app">
        <h1>Chat</h1>
        <ul style={{ listStyleType: 'none' }}>
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <EachLine message={item.message} person={currentUser} />
              </li>
            ))}
        </ul>
        <textarea
          placeholder="chat here"
          value={chat}
          rows={5}
          cols={200}
          onChange={(e) => setChat(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  )
}

export default App
