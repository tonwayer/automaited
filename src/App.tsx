import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SnippetDetail } from './Pages/SnippetDetail';
import { SnippetEdit } from './Pages/SnippetEdit';
import { SnippetAdd } from './Pages/SnippetAdd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new',
    element: <SnippetAdd />,
  },
  {
    path: '/:id',
    element: <SnippetDetail />,
  },
  {
    path: '/:id/edit',
    element: <SnippetEdit />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
