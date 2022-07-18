import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import CheckOut from "./components/CheckOut/CheckOut";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Service from "./components/Home/Service/Service";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Fotter from "./fixedpagecomponent/Fotter/Fotter";
import Header from "./fixedpagecomponent/Header/Header";
import Login from "./sociallogin/Login/Login";
import Signup from "./sociallogin/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Fotter></Fotter>
    </div>
  );
}

export default App;
