import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RESUME from "./html/Resume.js";
import RESUMEDETIAL from "./html/Resume_detail.js";
import "./resources/sass/common.scss";
import Header from "./html/include/header.js";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <div className="main">
          <div className="wrap flex-column">
            <div className="container index movePage">
              <Header />
              <Routes>
                <Route
                  path={"/projects"}
                  element={
                    <>
                      <RESUME />
                      <RESUMEDETIAL />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
