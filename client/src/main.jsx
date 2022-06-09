import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import Auth0ProviderWithHistory from '../src/auth0/auth0-provider-with-history'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </Provider>
)
