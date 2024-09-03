import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NavLayout } from '@/layouts';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import SettingsPage from '@/pages/SettingsPage';

function RouteProvider() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFoundPage />,
    },
    {
      path: '/',
      element: <NavLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/settings',
          element: <SettingsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RouteProvider };
