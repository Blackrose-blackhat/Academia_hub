import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Screens/Landing";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { auth } from "./services/firebase";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import ContactUsPage from "./Screens/Contact";
import Skills from "./Screens/skills";
import About from "./Screens/About";
import Acad from "./Screens/Acad";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem("userInfo", authUser)
      }
      else {
        setUser(null);
      }
    });
  }, []);

  const userId = user?.uid;
  return (


    <div className="fixed md:relative md:h-screen h-[100vh]  w-full   ">
      <Navbar />
      <ToastContainer position="top-left" />
      <Routes>
        <Route path="/" element={user && userId ? <Home /> : <Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={user?.uid ? <Skills /> : <Navigate to="/" />} />
        <Route path="/acad" element={user?.uid ? <Acad /> : <Navigate to="/" />} />
      </Routes>
      <footer />
    </div>


  )
}

export default App
