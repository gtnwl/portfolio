import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import INDEX from "./html/index.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/portpolio"} element={<INDEX />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
