import { routes } from "../../routes"
import {useRoutes} from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

function AllRoutes () {
  const element = useRoutes(routes);
  return (
    <>
      <ScrollToTop />
      {element}
    </>
  )
}

export default AllRoutes;