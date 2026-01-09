import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "../../resources/sass/common.scss";
import $ from "jquery";

function Header() {
  let navigate = useNavigate();
  const location = useLocation();

  const updateCircle = (path) => {
    $(".nav .slide").removeClass("active");
    $("#" + path).addClass("active");
  };

  // 현재 주소에 맞게 동그라미 그리기
  useEffect(() => {
    let path = location.pathname.replace("/", "");
    updateCircle(path);
  }, [location]);

  // 페이지 이동 이벤트
  const moveMainPage = (page) => {
    setTimeout(function () {
      // 동그라미 지우기
      $(".nav .slide").removeClass("active");

      setTimeout(function () {
        // 동그라미 그리기
        updateCircle(page);
        // 페이지 이동
        navigate("/" + page);
      }, 600);
    }, 600);
  };

  return (
    <>
      {/* 바로가기 메뉴 시작(tap키로 하는 접근성)
      <ul className="hidden">
        <li>
          <a href="#">메뉴바로가기</a>
        </li>
        <li>
          <a href="#">본문바로가기</a>
        </li>
        <li>
          <a href="#">하단바로가기</a>
        </li>
      </ul>*/}
      {/* 바로가기 메뉴 끝*/}
      {/*상단영역 시작*/}
      <header className="header_main">
        <h2 className="title">SUJI HONG</h2>
        <div className="txtBox">
          <p>Toronto, ON, CA</p>
          <p>E. 1999ssu@gmail.com</p>
          <p>T. (778) 714-1282</p>
          <p>
            LinkedIn.{" "}
            <a href="https://www.linkedin.com/in/suji-hong-137ab5343/">
              https://www.linkedin.com/in/suji-hong-137ab5343/
            </a>
          </p>
          <p>
            Portfolio.{" "}
            <a href="https://cat-box-6b041.web.app/">
              https://cat-box-6b041.web.app/
            </a>
          </p>
          <p>
            Git.{" "}
            <a href="https://github.com/gtnwl/portfolio">
              https://github.com/gtnwl/portfolio
            </a>
          </p>
        </div>
      </header>
      {/*상단영역 끝*/}
    </>
  );
}
export default Header;
