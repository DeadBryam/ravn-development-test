import '@/styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ApolloAppProvider, RouteProvider } from '@/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloAppProvider>
      <RouteProvider />
    </ApolloAppProvider>
  </StrictMode>
);
