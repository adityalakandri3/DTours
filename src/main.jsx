import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from './hooks/redux/store/store';

const queryclient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </Provider>
)
