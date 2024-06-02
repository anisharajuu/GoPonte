import { createBrowserRouter } from "react-router-dom";
import DetailsJob from "../components/alljobs/DetailsJob";
import Contacts from "../components/resources/BusinessComponents/BusinessContact.js";
// import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/Signup/Signup";
import BusinessSignup from "../components/Signup/BusinessSignup";
import Resources from "../components/resources/Resources";
import CVReview from "../components/FooterComponents/CVReview";
import About from "../components/about/About.js";
import UserSupport from "../components/support/UserSupport.js";
import FAQ from "../components/support/FAQ.js";
import Main from "../layout/Main";
import UserPortal from "../components/users/userPortal.js";
import BusinessLogin from "../components/login/BusinessLogin.js";
import BusinessPortal from "../components/business/BusinessPortal.js";

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
        path: "/businesslogin",
        element: <BusinessLogin />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },

      {
        path: "/DetailsJob",
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
        path: "/UserSupport",
        element: <UserSupport />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/userPortal",
    element: <UserPortal />,
  },
  {
    path: "/businessPortal",
    element: <BusinessPortal />,
  },
]);

export default routes;
