import { useRoutes } from 'react-router-dom'

import ClientLayout from './layouts/ClientLayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import AdminLayout from './layouts/AdminLayout';

function App() {
  const routes = useRoutes([
    { path: '/', element: <ClientLayout />, children: [
      { path: 'login', element: <Login />},
      { path: 'register', element: <Register />},
    ] },

    { path: '/dashboard', element: <AdminLayout />, children: [

    ] },
  ])
  return routes;
}

export default App
