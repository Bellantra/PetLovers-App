// src/auth/auth0-provider-with-history.js

import { useNavigate } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

// eslint-disable-next-line react/prop-types
const Auth0ProviderWithHistory = ({ children }) => {
    const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID

    const navigate = useNavigate()

    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname)
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory
