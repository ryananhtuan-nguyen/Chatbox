import { useMessages } from '../hooks/useMessages.ts'
import EachLine from './EachLine.tsx'
import { useState } from 'react'
import Nav from './Nav'
import * as customHook from '../hooks/useMessages.ts'
import { useAuth0 } from '@auth0/auth0-react'
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

  const { isAuthenticated } = useAuth0()
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
        {isAuthenticated && (
          <textarea
            placeholder="chat here"
            value={chat}
            rows={5}
            cols={200}
            onChange={(e) => setChat(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
        )}
      </div>
    </>
  )
}

export default App
