import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { NavLayout } from '@/layouts';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import MyTasksPage from '@/pages/MyTasksPage';
import NotFoundPage from '@/pages/NotFoundPage';

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
          path: '/my-tasks',
          element: <MyTasksPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RouteProvider };
