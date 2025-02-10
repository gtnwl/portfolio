import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RESUME from "./html/Resume.js";
import Acsell from "./html/projects/acsell/Acsell.js";
import Zikpay from "./html/projects/zikpay/Zikpay.js";
import Tailorship from "./html/projects/tailorship/Tailorship.js";
import Sangjo from "./html/projects/sangjo/Sangjo.js";
import Copyright from "./html/projects/copyright/Copyright.js";
import Tobemall from "./html/projects/tobemall/Tobemall.js";
import Babathe from "./html/projects/babathe/Babathe.js";
import Innocean from "./html/projects/innocean/Innocean.js";
import Catbox from "./html/projects/catbox/Catbox.js";
import Bandi from "./html/projects/bandi/Bandi.js";
import "./resources/sass/common.scss";
import Header from "./html/include/header.js";
import SKILLS from "./html/skills.js";
import ABOUT from "./html/about.js";
import Footer from "./html/include/footer.js";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <div className="main">
          <div className="wrap flex-column">
            <div className="container index movePage">
              <Header />
              <Routes>
                <Route path={"/projects"} element={<RESUME />} />
                <Route path={"/skills"} element={<SKILLS />} />
                <Route path={"/about"} element={<ABOUT />} />
                <Route path={"/Bandi"} element={<Bandi />} />
                <Route path={"/Catbox"} element={<Catbox />} />
                <Route path={"/Innocean"} element={<Innocean />} />
                <Route path={"/Babathe"} element={<Babathe />} />
                <Route path={"/Tobemall"} element={<Tobemall />} />
                <Route path={"/Copyright"} element={<Copyright />} />
                <Route path={"/Sangjo"} element={<Sangjo />} />
                <Route path={"/Tailorship"} element={<Tailorship />} />
                <Route path={"/Zikpay"} element={<Zikpay />} />
                <Route path={"/Acsell"} element={<Acsell />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
