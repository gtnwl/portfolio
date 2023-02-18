import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MAIN from "./html/main.js";
import "./resources/sass/common.scss";
import Header from "./html/include/header.js";
import SKILLS from "./html/skills.js";
import ABOUT from "./html/about.js";
import Footer from "./html/include/footer.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="wrap flex-fix">
            <div className="container index movePage">
              <Header></Header>
              <Routes>
                <Route path={"/portfolio"} element={<MAIN />}></Route>
                <Route path={"/skills"} element={<SKILLS />}></Route>
                <Route path={"/about"} element={<ABOUT />}></Route>
              </Routes>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
