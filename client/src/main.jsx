import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')
const root = createRoot(container)
const REACT_APP_AUTH0_DOMAIN = "petloversg29.us.auth0.com";
const REACT_APP_AUTH0_CLIENT_ID = "x3R7ooAzLflwYhxZqmbV8TuOuFd7Onml";

root.render(
    <Provider store={store}>
      <BrowserRouter>  
      <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN}
        clientId={REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}>
        <App />
        </Auth0Provider>
        </BrowserRouter>
    </Provider>
)
