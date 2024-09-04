import React, {useEffect} from 'react';
import { RouterProvider,Routes,Route, createBrowserRouter, Outlet, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Assure-toi du bon chemin
import axiosInstance from './services/axiosInstance';
import ProtectedRoute from './components/Connexion/ProtectedRoute';
import Todolist from './components/ToDoList/Todolist';
import Home from './components/Home';
import Scrum from './components/Scrum';
import Planning from './components/Planning';
import Chat from './components/Chat';
import Kanban from './components/Kanban';
import Nav from './components/Nav';
import Error from './components/Error';
import Register from './components/Connexion/Register';
import Login from './components/Connexion/Login';
import Logout from './components/Connexion/Logout';
import './App.scss';
import PersistLogin from './services/PersistLogin';

const router = createBrowserRouter([
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
                        <Kanban />
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
]);

function Root() {
    return (
        <>
        {/* <PersistLogin/> */}
        <main className='relative'>
            <div className='md:flex md:flex-row'>
                <Nav />
                <PersistLogin/>
                {/* <Outlet />      */}
            </div>
        </main>
        </>
    );
}

function App() {

    useEffect(() => {
        axiosInstance(); // Configure l'intercepteur au démarrage
    }, []);

    return (
        <AuthProvider>
            {/* <BrowserRouter>
            <Routes>
<Route>
    <Route element={<PersistLogin/>}>
    <Route path={'/'} element={<Home/>}/>
    </Route>
</Route>
            </Routes>
            </BrowserRouter> */}
            <RouterProvider router={router} />
        </AuthProvider>

    );
}

export default App;
