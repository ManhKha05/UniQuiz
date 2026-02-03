import LayoutAdmin from "../layouts/Admin/LayoutAdmin";
import LayoutDefault from "../layouts/User/LayoutDefault";
import Subjects from "../pages/admin/Subjects";
import Users from "../pages/admin/Users";
import AboutUs from "../pages/User/AboutUs";
import Contact from "../pages/User/Contact";
import ExamDo from "../pages/User/ExamDo";
import ExamHistory from "../pages/User/ExamHistory";
import ExamIntro from "../pages/User/ExamIntro";
import ExamResult from "../pages/User/ExamResult";
import Exams from "../pages/User/Exams";
import ExamsAd from "../pages/admin/Exams";
import Home from "../pages/User/Home";
import NotFound from "../pages/User/NotFound";
import ResetPassword from "../pages/User/ResetPassword";
import Results from "../pages/admin/Results";
import ContactFeedback from "../pages/admin/ContactFeedback";
import Dashboard from "../pages/admin/Dashboard";
import Questions from "../pages/admin/Questions";

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
        path: 'exams/:id/start',
        element: <ExamDo/>
      },
      {
        path: 'exam-result/:resultId',
        element: <ExamResult/>
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
    path: '/admin',
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'contacts',
        element: <ContactFeedback/>
      },
      {
        path: "subjects",
        element: <Subjects/>
      },
      {
        path: "questions",
        element: <Questions/>
      },
      {
        path: "exams",
        element: <ExamsAd />
      },
      {
        path: "results",
        element: <Results/>
      },
      {
        path: "users",
        element: <Users/>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]