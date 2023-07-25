import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import MAIN from "./html/main.js";
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
import NoticeBoard from "./html/NoticeBoard.js";
import SwitchButton from "./html/components/button/SwitchButton.js";
import { GlobalStyle } from "./theme/GlobalStyle.js";
import { theme } from "./theme/theme.js";
import { ThemeProvider, useTheme } from "./context/themeProvider.js";
import { createTheme } from "@mui/material";

const App = ({ toggle, mode }) => {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <>
      <BrowserRouter basename="/portfolio/">
        <ThemeProvider>
          <GlobalStyle />
          <div className="main">
            <div className="wrap flex-fix">
              <div className="container index movePage">
                <SwitchButton toggle={toggleTheme} mode={ThemeMode} />
                <Header></Header>

                <Routes>
                  <Route path={"/projects"} element={<MAIN />}></Route>
                  <Route path={"/skills"} element={<SKILLS />}></Route>
                  <Route path={"/about"} element={<ABOUT />}></Route>
                  <Route
                    path={"/NoticeBoard"}
                    element={<NoticeBoard />}
                  ></Route>
                  <Route path={"/Bandi"} element={<Bandi />}></Route>
                  <Route path={"/Catbox"} element={<Catbox />}></Route>
                  <Route path={"/Innocean"} element={<Innocean />}></Route>
                  <Route path={"/Babathe"} element={<Babathe />}></Route>
                  <Route path={"/Tobemall"} element={<Tobemall />}></Route>
                  <Route path={"/Copyright"} element={<Copyright />}></Route>
                  <Route path={"/Sangjo"} element={<Sangjo />}></Route>
                  <Route path={"/Tailorship"} element={<Tailorship />}></Route>
                  <Route path={"/Zikpay"} element={<Zikpay />}></Route>
                  <Route path={"/Acsell"} element={<Acsell />}></Route>
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
