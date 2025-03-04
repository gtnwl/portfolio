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
      <div className="header_wrap">
        <header className="header_main border-center gap40">
          {/* <div className="top">
            <p className="date title title_small_v2" data-widget="date">
              <span className="day">Wednesday,</span>
              <span className="month">January 11,</span>
              <span className="year">2023</span>
            </p>
          </div> */}
          <div className="left">
            <div className="imgBox">
              <img
                src={require("../../resources/images/icon/icon_me.png")}
                alt="me"
              />
            </div>
            <div className="txtBox">
              <h1 className="title textLeft mT30">SUJI HONG</h1>
              <p className="textLeft fontSize22">
                I have 2 years of experience as a frontend developer, building
                user-friendly and visually appealing websites. Before that, I
                worked as a web publisher for a year, focusing on website
                development and optimization.
              </p>
            </div>
          </div>
          <ul className="right">
            <li className="list">
              <p className="title">ADDRESS.</p>
              <p className="text_v5">99 wheat boom drive Oakville, L6H 0M9</p>
            </li>
            <li className="list">
              <p className="title">EMAIL.</p>
              <p className="text_v5">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=1999ssu@gmail.com">
                  1999ssu@gmail.com (Click to email me!)
                </a>
              </p>
            </li>
            <li className="list">
              <p className="title">TEL.</p>
              <p className="text_v5">(778) 714-1282</p>
            </li>
            <li className="list">
              <p className="title">VISA TYPE.</p>
              <p className="text_v5">Working Holiday </p>
            </li>
            <li className="list">
              <p className="title">VISA DURATION.</p>
              <p className="text_v5">Feb 26, 2025 – Feb 25, 2027</p>
            </li>
            <li className="list">
              <p className="title">GIT HUB.</p>
              <p className="text_v5">
                <a href="https://github.com/gtnwl/portfolio">
                  https://github.com/gtnwl/portfolio
                </a>
              </p>
            </li>
            <li className="list">
              <p className="title">PORTFOLIO.</p>
              <p className="text_v5">
                <a href="https://cat-box-6b041.web.app/">
                  https://cat-box-6b041.web.app/
                </a>
              </p>
            </li>
          </ul>
        </header>
      </div>
      {/*상단영역 끝*/}
    </>
  );
}
export default Header;
