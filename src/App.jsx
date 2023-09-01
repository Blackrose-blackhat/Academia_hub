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
import Detail from "./Screens/Detail";

import Footer from "./components/Footer";
import Pagelrn from "./Screens/SkillSpace/Pagelrn";
import Code from "./Screens/SkillSpace/Code";
import Compete from "./Screens/SkillSpace/Compete";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Eigthsem, Fifthsem, FirstSem, Fourthsem, Secondsem, Seventhsem, Sixthsem, Thirdsem } from "./Screens/Acad/index";
function App() {
  const [user, setUser] = useState(null);
  const theme = createTheme();
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
    <ThemeProvider theme={theme}>

      <div className="md:relative md:h-screen h-screen w-full   ">
        <div style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
          <Navbar user={user} />
          <ToastContainer position="top-left" />
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/" element={user ? <Home user={user} /> : <Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={user?.uid ? <Skills /> : <Navigate to="/" />} />
            <Route path="/acad" element={user?.uid ? <Acad /> : <Navigate to="/" />} />
            <Route path="/acad/1stSem" element={user?.uid ? <FirstSem /> : <Navigate to="/" />} />
            <Route path="/acad/2ndSem" element={user?.uid ? <Secondsem /> : <Navigate to="/" />} />
            <Route path="/acad/3rdSem" element={user?.uid ? <Thirdsem /> : <Navigate to="/" />} />
            <Route path="/acad/4thSem" element={user?.uid ? <Fourthsem /> : <Navigate to="/" />} />
            <Route path="/acad/5thSem" element={user?.uid ? <Fifthsem /> : <Navigate to="/" />} />
            <Route path="/acad/6thSem" element={user?.uid ? <Sixthsem /> : <Navigate to="/" />} />
            <Route path="/acad/7thSem" element={user?.uid ? <Seventhsem /> : <Navigate to="/" />} />
            <Route path="/acad/8thSem" element={user?.uid ? <Eigthsem /> : <Navigate to="/" />} />
            <Route path="/skills/Learn" element={user?.uid ? <Pagelrn /> : <Navigate to="/" />} />
            <Route path="/skills/Code" element={user?.uid ? <Code /> : <Navigate to="/" />} />
            <Route path="/skills/Compete" element={user?.uid ? <Compete /> : <Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </ThemeProvider>


  )
}

export default App
