import React from "react";
import { Link } from "react-router-dom";
import "../../resources/sass/common.scss";
import $ from "jquery";

function Header() {
  const moveMainPage = () => {
    // 왼쪽에서 오른쪽 이벤트 주기
    // 클릭 했을 때 mainBg가 있으면
    // 1. mainBg 지우기
    // 2. movePage 지우기
    // 3. sub 추가하기
    // 4. subMovePage 추가하기

    // 오른쪽에서 왼쪽 이벤트 주고
    // 클릭 했을 때 sub가 있으면
    // 1. sub 지우기
    // 2. subMovePage 지우기
    // 3. mainBg 추가하기
    // 4. movePage 추가하기
    // 왼쪽에서 오른쪽 이벤트 다시 하기
    // 5. mainBg 지우기
    // 6. movePage 지우기
    // 7. sub 추가하기
    // 8. subMovePage 추가하기

    // 왼쪽에서 오른쪽 애니메이션
    const $main = $(".main.mainBg .index");
    $main.addClass("movePage");

    // 오른쪽에서 왼쪽 애니메이션
    $(".main").removeClass("mainBg");
    $main.removeClass("movePage");
    $(".main").addClass("sub");
    $main.addClass("subMovePage");
  };

  return (
    <>
      {/* 바로가기 메뉴 시작(tap키로 하는 접근성)*/}
      <ul class="hidden">
        <li>
          <a href="#">메뉴바로가기</a>
        </li>
        <li>
          <a href="#">본문바로가기</a>
        </li>
        <li>
          <a href="#">하단바로가기</a>
        </li>
      </ul>
      {/* 바로가기 메뉴 끝*/}
      {/*상단영역 시작*/}
      <div class="header_wrap">
        <header class="header_main">
          <a href="index.html" class="btnBox btnBox_v2">
            <p class="title title_small_v1">WELCOME TO</p>
            <h1 class="title">SUJI’S PORTFOLIO</h1>
            <p class="date title title_small_v2" data-widget="date">
              <span class="day">Wednesday,</span>
              <span class="month">January 11,</span>
              <span class="year">2023</span>
            </p>
          </a>
          <nav class="nav_wrap">
            <ul class="nav">
              <li>
                <Link
                  to="portfolio"
                  onClick={moveMainPage}
                  className="text text_v4Bold btn slide"
                >
                  {/* <a
                  class="text text_v4Bold btn slide"
                  id="portfolio"
                  href="#index1"
                  onclick="fnMove('1')"
                > */}
                  PROJECTS
                  <span class="hover-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -4 150.93 80.58"
                      class="circle-1"
                    >
                      <path
                        class="hover-path"
                        fill="none"
                        stroke="#26498d"
                        stroke-miterlimit="10"
                        stroke-width="15px"
                        d="M51.36,8.75q-9.14-.64-18.3-.85-4.92-.16-9.85,0c-3.22.23-6.62.7-9.39,2.49A21.08,21.08,0,0,0,8,16.62,17.68,17.68,0,0,0,5.8,21.85c-.68,2.42-1.13,4.43-.48,6.94,1,3.79,3.48,7,6,9.91a60.49,60.49,0,0,0,15,12.44C33.6,55.43,41.8,57.88,49.91,60a144.68,144.68,0,0,0,27.72,4.25c10.65.62,21.78.65,32.27-1.6a48.14,48.14,0,0,0,10.86-3.49,16.81,16.81,0,0,0,6-4.33,11,11,0,0,0,1.91-9.37c-1.11-5.29-4.53-9.43-8.55-12.91a71.43,71.43,0,0,0-17.8-10.19Q89.91,17.05,77.08,13C66.09,9.53,54.58,6,43,5.14a32.64,32.64,0,0,0-8.67.34"
                      ></path>
                    </svg>
                  </span>
                </Link>
                {/* </a> */}
              </li>
              <li>
                <Link
                  to="skills"
                  onClick={moveMainPage}
                  className="text text_v4Bold btn slide"
                >
                  {/* <a
                  class="text text_v4Bold btn slide"
                  id="skill"
                  href="#index2"
                  onclick="fnMove('2')"
                > */}
                  SKILLS
                  <span class="hover-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 394.1 152.8"
                      class="circle-3"
                    >
                      <path
                        fill="none"
                        stroke="#26498d"
                        stroke-miterlimit="10"
                        stroke-width="30px"
                        class="hover-path"
                        d="M104.1,58.5c-25.8,0.1-54.1,3.7-75,20.2c-6.4,5-11.8,11-13.7,19.1c-2.3,9.3,5.9,20.1,13,24.8
                                    c14.3,9.3,31.5,10.9,48,12.5c36.1,3.7,72.4,3,108.6,1.3c25-1.1,49.9-3.6,74.7-7.4c21.3-2.2,42.4-6.3,63-12.2
                                    c9.3-3.2,18.6-6.4,27.9-9.6c11-2.4,19.7-8,26.2-16.8c-4.6-10.3-12.3-17.4-23.1-21.2c-17.4-11.4-36.1-20.4-55.9-27
                                    c-33.5-12.8-71.9-23.1-108-25.8c-17.8-1.3-37.2-2.9-54.7,1.4c-5.4,1.3-11.6,2.5-14.6,7.7"
                      ></path>
                    </svg>
                  </span>
                  {/* </a> */}
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  onClick={moveMainPage}
                  className="text text_v4Bold btn slide"
                >
                  {/* <a
                  class="text text_v4Bold btn slide"
                  id="aboutme"
                  href="#index3"
                  onclick="fnMove('3')"
                > */}
                  ABOUT ME
                  <span class="hover-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 414.84 111.47"
                      class="circle-2"
                    >
                      <path
                        fill="none"
                        stroke="#26498d"
                        stroke-miterlimit="10"
                        stroke-width="25px"
                        class="hover-path"
                        d="M180.35,13.55c34.13-1.2,68.69-2.81,102.4,4.3,16.68,3.52,34,8,42.07,24.47,6.87,14.12.21,30.15-13.29,37-14.74,7.47-31.66,8.88-47.81,10.7-37.22,4.19-74.64,6.71-112.06,8.23-26.8,1.09-53.5,1-80.27-.54q-13.88-.54-27.64-2.36a52.37,52.37,0,0,1-16.92-3.74,26.59,26.59,0,0,1-13.5-18.42c-1.42-6.8-1.45-11.7,3.62-16.94,10.74-11.1,28.44-15.61,42.88-20.07a334.43,334.43,0,0,1,58.34-10q39.16-5.09,78.66-6.47c49.34-2.31,98.76-1.35,148.06,1.27,19.22,1,38.35,2.18,57.45,4.55"
                      ></path>
                    </svg>
                  </span>
                  {/* </a> */}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {/*상단영역 끝*/}
    </>
  );
}
export default Header;
