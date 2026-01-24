import { Outlet } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


function LayoutDefault() {
  return (
    <>
      <div className="user-layout">
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutDefault;