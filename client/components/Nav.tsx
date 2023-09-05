import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated.tsx'
import { NavGroup, NavButton } from './Styled'
import { useAuth0 } from '@auth0/auth0-react'

function Nav(props: Props) {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}`,
      },
    })
    props.setUser((user?.name as string) || '')
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.email}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Nav
