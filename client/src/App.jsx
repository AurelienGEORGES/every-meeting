import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Todolist from './components/ToDoList/Todolist';
import Home from './components/Home';
import Scrum from './components/Scrum';
import Planning from './components/Planning';
import Chat from './components/Chat';
import Kanban from './components/Kanban';
import Nav from './components/Nav';
import Error from './components/Error';
import Register from './components/Connexion/Register';
import './App.scss';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/to-do-list',
        element: <Todolist />,
      },
      {
        path: '/kanban',
        element: <Kanban />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/planning',
        element: <Planning />,
      },
      {
        path: '/scrum',
        element: <Scrum />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

function Root() {
  return (
    <main className='relative'>
      <div className='md:flex md:flex-row'>
        <Nav />
        <Outlet />
      </div>
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
