import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./LayoutDefault.scss";
import { motion } from "framer-motion";

function LayoutDefault() {
  const location = useLocation();

  return (
    <>
      <div className="user-layout">
        <Header />
        <div className="user-layout__content">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LayoutDefault;