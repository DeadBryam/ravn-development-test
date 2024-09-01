import '@/styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouteProvider } from '@/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider />
  </StrictMode>
);
