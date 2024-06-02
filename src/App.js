import "./App.css";
// import { RouterProvider } from 'react-router-dom';
// import routes from './routes/Routes';
import RequireBusiness from "./components/require/RequireBusiness.js";
import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import DetailsJob from "./components/alljobs/DetailsJob.js";
import Contacts from "./components/resources/BusinessComponents/BusinessContact.js";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import BusinessSignup from "./components/Signup/BusinessSignup";
import Resources from "./components/resources/Resources";
import CVReview from "./components/FooterComponents/CVReview";
import About from "./components/about/About.js";
import UserSupport from "./components/support/UserSupport.js";
import FAQ from "./components/support/FAQ.js";
import UserPortal from "./components/users/userPortal.js";
import BusinessPortal from "./components/business/BusinessPortal.js";
import BusinessLogin from "./components/login/BusinessLogin";

// import { RouterProvider } from 'react-router-dom';
// import routes from './routes/Routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="BusinessSignup" element={<BusinessSignup />} />
        <Route path="login" element={<Login />} />
        <Route path="businesslogin" element={<BusinessLogin />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="DetailsJob" element={<DetailsJob />} />
        <Route path="resources" element={<Resources />} />
        <Route path="CV-review" element={<CVReview />} />
        <Route path="UserSupport" element={<UserSupport />} />
        <Route path="FAQ" element={<FAQ />} />
      </Route>
      <Route path="/userPortal" element={<UserPortal />} />
      <Route element={<RequireBusiness />}>
        <Route path="/businessPortal" element={<BusinessPortal />} />
      </Route>
    </Routes>
    // <div className="max-w-[100%] mx-auto App">
    //       <RouterProvider router={routes}/>
    // </div>
  );
}

export default App;
