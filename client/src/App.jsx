

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {Login} from "./pages/Login";
import {Register  } from "./pages/Register";
import {Contact} from "./pages/Contact";
import Navbar from "./_components/Navbar"
import Blog from "./pages/Blog";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create-blog" element={<Blog/>}/>
          
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
