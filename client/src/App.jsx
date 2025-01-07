import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Connexion/ProtectedRoute';
import Todolist from './components/ToDoList/Todolist';
import Home from './components/Home';
import Scrum from './components/Scrum';
import Planning from './components/Planning';
import Chat from './components/Chat';
import KanbanBoard from './components/Kanban/KanbanBoard';
import Nav from './components/Nav';
import Error from './components/Error';
import Register from './components/Connexion/Register';
import Login from './components/Connexion/Login';
import Logout from './components/Connexion/Logout';
import './App.scss';
import PersistLogin from './services/PersistLogin';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '/to-do-list',
          element: (
            <ProtectedRoute>
              <Todolist />
            </ProtectedRoute>
          ),
        },
        {
          path: '/kanban',
          element: (
            <ProtectedRoute>
              <KanbanBoard />
            </ProtectedRoute>
          ),
        },
        {
          path: '/chat',
          element: (
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          ),
        },
        {
          path: '/planning',
          element: (
            <ProtectedRoute>
              <Planning />
            </ProtectedRoute>
          ),
        },
        {
          path: '/scrum',
          element: (
            <ProtectedRoute>
              <Scrum />
            </ProtectedRoute>
          ),
        },
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/logout',
          element: <Logout />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
    },
  },
);

function Root() {
  return (
    <>
      <main className='relative'>
        <div className='md:flex md:flex-row'>
          <Nav />
          <PersistLogin />
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </AuthProvider>
  );
}

export default App;
