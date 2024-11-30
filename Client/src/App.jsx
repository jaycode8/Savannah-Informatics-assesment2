import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./screens/authentication/signup"
import Signin from "./screens/authentication/signin"
import Landing from "./screens/Landing";
import NavBar from "./screens/partials/Navbar";
import Footer from "./screens/partials/Footer";
import Users from "./screens/Users";
import Albums from "./screens/Albums";
import Album from "./screens/Album";
import User from "./screens/User";
export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
          <Route path="albums" element={<Albums />} />
          <Route path="album/:id" element={<Album />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}