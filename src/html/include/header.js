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
              <p className="text_v5">75a Ave Langley Twp, Canada 19760</p>
            </li>
            <li className="list">
              <p className="title">EMAIL.</p>
              <p className="text_v5">1999ssu@gmail.com</p>
            </li>
            <li className="list">
              <p className="title">TEL(KO).</p>
              <p className="text_v5">+82 10-3293-1282</p>
            </li>
            <li className="list">
              <p className="title">TEL(CA).</p>
              <p className="text_v5">-</p>
            </li>
            <li className="list">
              <p className="title">VISA TYPE.</p>
              <p className="text_v5">Working Holiday </p>
            </li>
            <li className="list">
              <p className="title">VISA DURATION.</p>
              <p className="text_v5">Feb 26, 2025 – Feb 26, 2027</p>
            </li>
            <li className="list">
              <p className="title">GIT HUB.</p>
              <p className="text_v5">https://github.com/gtnwl/portfolio</p>
            </li>
          </ul>
        </header>
        {/* <nav className="nav_wrap">
          <ul className="nav">
            <li>
              <button
                className="text text_v4Bold btn slide"
                id="portfolio"
                onClick={() => moveMainPage("projects")}
              >
                PROJECTS
                <span className="hover-indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -4 150.93 80.58"
                    className="circle-1"
                  >
                    <path
                      className="hover-path"
                      fill="none"
                      stroke={"rgba(175, 48, 25, 1)"}
                      strokeMiterlimit="10"
                      strokeWidth="15px"
                      d="M51.36,8.75q-9.14-.64-18.3-.85-4.92-.16-9.85,0c-3.22.23-6.62.7-9.39,2.49A21.08,21.08,0,0,0,8,16.62,17.68,17.68,0,0,0,5.8,21.85c-.68,2.42-1.13,4.43-.48,6.94,1,3.79,3.48,7,6,9.91a60.49,60.49,0,0,0,15,12.44C33.6,55.43,41.8,57.88,49.91,60a144.68,144.68,0,0,0,27.72,4.25c10.65.62,21.78.65,32.27-1.6a48.14,48.14,0,0,0,10.86-3.49,16.81,16.81,0,0,0,6-4.33,11,11,0,0,0,1.91-9.37c-1.11-5.29-4.53-9.43-8.55-12.91a71.43,71.43,0,0,0-17.8-10.19Q89.91,17.05,77.08,13C66.09,9.53,54.58,6,43,5.14a32.64,32.64,0,0,0-8.67.34"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                className="text text_v4Bold btn slide"
                id="skills"
                onClick={() => moveMainPage("skills")}
              >
                SKILLS
                <span className="hover-indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 394.1 152.8"
                    className="circle-3"
                  >
                    <path
                      fill="none"
                      stroke={"rgba(175, 48, 25, 1)"}
                      strokeMiterlimit="10"
                      strokeWidth="30px"
                      className="hover-path"
                      d="M104.1,58.5c-25.8,0.1-54.1,3.7-75,20.2c-6.4,5-11.8,11-13.7,19.1c-2.3,9.3,5.9,20.1,13,24.8
                                    c14.3,9.3,31.5,10.9,48,12.5c36.1,3.7,72.4,3,108.6,1.3c25-1.1,49.9-3.6,74.7-7.4c21.3-2.2,42.4-6.3,63-12.2
                                    c9.3-3.2,18.6-6.4,27.9-9.6c11-2.4,19.7-8,26.2-16.8c-4.6-10.3-12.3-17.4-23.1-21.2c-17.4-11.4-36.1-20.4-55.9-27
                                    c-33.5-12.8-71.9-23.1-108-25.8c-17.8-1.3-37.2-2.9-54.7,1.4c-5.4,1.3-11.6,2.5-14.6,7.7"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
            <li>
              <button
                className="text text_v4Bold btn slide"
                id="about"
                onClick={() => moveMainPage("about")}
              >
                ABOUT ME
                <span className="hover-indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 414.84 111.47"
                    className="circle-2"
                  >
                    <path
                      fill="none"
                      stroke={"rgba(175, 48, 25, 1)"}
                      strokeMiterlimit="10"
                      strokeWidth="25px"
                      className="hover-path"
                      d="M180.35,13.55c34.13-1.2,68.69-2.81,102.4,4.3,16.68,3.52,34,8,42.07,24.47,6.87,14.12.21,30.15-13.29,37-14.74,7.47-31.66,8.88-47.81,10.7-37.22,4.19-74.64,6.71-112.06,8.23-26.8,1.09-53.5,1-80.27-.54q-13.88-.54-27.64-2.36a52.37,52.37,0,0,1-16.92-3.74,26.59,26.59,0,0,1-13.5-18.42c-1.42-6.8-1.45-11.7,3.62-16.94,10.74-11.1,28.44-15.61,42.88-20.07a334.43,334.43,0,0,1,58.34-10q39.16-5.09,78.66-6.47c49.34-2.31,98.76-1.35,148.06,1.27,19.22,1,38.35,2.18,57.45,4.55"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </nav> */}
      </div>
      {/*상단영역 끝*/}
    </>
  );
}
export default Header;
