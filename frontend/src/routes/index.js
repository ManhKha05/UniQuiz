import LayoutDefault from "../layouts/LayoutDefault";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ResetPassword from "../pages/ResetPassword";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '*',
    element: <NotFound />
  }
]