import '@/styles/index.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Bounce, ToastContainer } from 'react-toastify';

import { ApolloAppProvider, RouteProvider } from '@/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloAppProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <RouteProvider />
    </ApolloAppProvider>
  </StrictMode>
);
