import AdminFooter from "./Admin/Footer"
import AdminHeader from "./Admin/Header"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <main>
        <AdminHeader />
        <Outlet />
        <AdminFooter />
    </main>
  )
}

export default AdminLayout
