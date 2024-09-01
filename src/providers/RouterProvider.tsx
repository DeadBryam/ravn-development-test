import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';

function RouteProvider() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <ErrorPage />,
    },
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RouteProvider };
