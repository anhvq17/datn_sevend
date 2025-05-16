import { useRoutes } from 'react-router-dom'

import ClientLayout from './layouts/ClientLayout';
import Homepage from './pages/Client/Homepage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  const routes = useRoutes([
    { path: '/', element: <ClientLayout />, children: [
      { path: '', element: <Homepage /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ] },

    { path: '/dashboard', element: <AdminLayout />, children: [
      { path: '', element: <Dashboard /> },
    ] },
  ])
  return routes;
}

export default App
