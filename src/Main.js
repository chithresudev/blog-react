import Blogs from "./pages/Blogs";
import ViewBlog from "./pages/ViewBlog";
import Header from "./includes/Header";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./admin_portal/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Dashboard from "./admin_portal/Dashboard";
import NavBarAdmin from "./component/NavBarAdmin";
import CreatePost from "./admin_portal/CreatePost";
import { AllPost } from "./admin_portal/AllPost";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />

        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="posts" element={<Blogs />} />
          <Route path="post/:blogId/view" element={<ViewBlog />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        <Route path="admin" element={<Login />} />
        <Route path="admin-portal" element={<NavBarAdmin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="all-post" element={<AllPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Header />
    // <Blog />
  );
};
export default Main;
