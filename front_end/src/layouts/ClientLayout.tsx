import ClientHeader from "./Client/Header"
import { Outlet } from "react-router-dom"
import ClientFooter from "./Client/Footer"

const ClientLayout = () => {
  return (
    <main>
        <ClientHeader />
        <Outlet />
        <ClientFooter />
    </main>
  )
}

export default ClientLayout