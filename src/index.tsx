
import ReactDOM from 'react-dom/client';

import { Routes } from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </QueryClientProvider>
);

