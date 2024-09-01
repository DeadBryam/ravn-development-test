import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

function RouteProvider() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFoundPage />,
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
