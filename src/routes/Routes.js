import { createBrowserRouter } from "react-router-dom";
import DetailsJob from "../components/alljobs/DetailsJob";
import Contacts from "../components/contacts/Contacts";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/Signup/Signup";
import BusinessSignup from "../components/Signup/BusinessSignup";
import Resources from "../components/resources/Resources";
import CVReview from "../components/FooterComponents/CVReview";
import About from "../components/about/About.js";
import Main from "../layout/Main";
import StudentPortal from "../components/student/StudentPortal";
import Apply from "../components/student/Apply";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        //element: <Home />,
        element: <Resources />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/BusinessSignup",
        element: <BusinessSignup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },

      {
        path: "/job/:details",
        element: <DetailsJob />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/CV-review",
        element: <CVReview />,
      },
      {
        path: "/userPortal",
        element: <userPortal />,
      },
      {
        path: "/studentPortal",
        element: <StudentPortal />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
    ],
  },
]);

export default routes;
