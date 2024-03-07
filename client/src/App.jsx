import Todolist from './components/Todolist';
import Home from './components/Home';
import Scrum from './components/Scrum';
import Planning from './components/Planning';
import Chat from './components/Chat';
import Kanban from './components/Kanban';
import Nav from './components/Nav';
import Error from './components/Error';
import './App.scss';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/to-do-list',
                element: <Todolist />,
                loader: () => fetch('http://localhost/api/to_do_list_items'),
            },
            {
                path: '/kanban',
                element: <Kanban />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/planning',
                element: <Planning />
            },
            {
                path: '/scrum',
                element: <Scrum />
            },
            {
                path: '/',
                element: <Home />
            }
        ],   
    }
])

function Root() {
    return <>
        <main className="relative">
            <div className='md:flex md:flex-row'>
                <Nav />
                <Outlet />
            </div>
        </main>
    </>
}

function App() {

    return (
        <RouterProvider router={router} />
    );
}

export default App;
