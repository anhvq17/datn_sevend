import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/Admin/Dashboard"
import NotFound from "../pages/NotFound"

const AdminRoutes = {
  path: '/dashboard',
  element: <AdminLayout />,
  children: [
    { path: '', element: <Dashboard /> },

    // Khi đường dẫn sai hoặc không tồn tại, dẫn đến trang NotFound
    { path: '*', element: <NotFound homePath="/dashboard"/> },
  ]
}

export default AdminRoutes
