import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-1">
        <div className="p-4 h-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
