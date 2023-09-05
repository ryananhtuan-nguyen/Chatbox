
import App from './components/App.tsx'
import {Auth0Provider} from '@auth0/auth0-react'

import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient= new QueryClient()
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider
      domain="matai-ryan.au.auth0.com"
      clientId="YEqk7Vih3SFIpfpB4z8e0a6DHDX6xHB0"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://api/chatbox',
      }}
    >
      <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
    </Auth0Provider>
  )
})