import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MAIN from "./html/main.js";
import "./resources/sass/common.scss";
import Header from "./html/include/header.js";
import SKILLS from "./html/skills.js";
import ABOUT from "./html/about.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <body className="main mainBg">
          <div className="wrap flex-fix">
            <div className="container index">
              <Header></Header>
              <Routes>
                <Route path={"/portfolio"} element={<MAIN />}></Route>
                <Route path={"/skills"} element={<SKILLS />}></Route>
                <Route path={"/about"} element={<ABOUT />}></Route>
              </Routes>
            </div>
          </div>
        </body>
      </BrowserRouter>
    </>
  );
}

export default App;
