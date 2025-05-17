import ClientLayout from "../layouts/ClientLayout"
import Homepage from "../pages/Client/Homepage"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Cart from "../pages/Client/Cart"
import NotFound from "../pages/NotFound"

const ClientRoutes = {
  path: '/',
  element: <ClientLayout />,
  children: [
    { path: '', element: <Homepage /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'cart', element: <Cart /> },

    // Khi đường dẫn sai hoặc không tồn tại, dẫn đến trang NotFound
    { path: '*', element: <NotFound homePath="/"/> },
  ]
}

export default ClientRoutes
