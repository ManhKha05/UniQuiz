import LayoutDefault from "../layouts/LayoutDefault";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ExamHistory from "../pages/ExamHistory";
import ExamIntro from "../pages/ExamIntro";
import Exams from "../pages/Exams";
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
        path: 'subjects/:id/exams',
        element: <Exams/>
      },
      {
        path: 'exams/:id',
        element: <ExamIntro/>
      },
      {
        path: 'exam-history',
        element: <ExamHistory/>
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
    path: 'auth/reset-password/:token',
    element: <ResetPassword />
  },
  {
    path: '*',
    element: <NotFound />
  }
]