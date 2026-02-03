import { Outlet } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./LayoutDefault.scss";


function LayoutDefault() {
  return (
    <>
      <div className="user-layout">
        <Header />
        <div className="user-layout__content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutDefault;