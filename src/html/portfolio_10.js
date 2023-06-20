import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function PORTFOLIO10() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">ACSELL</p>
          <p className="text text_v5">작업 기간 : 22.10.27 - 23.01</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            기본적인 상품데이터 관리, 상품매칭, 판매율 분석, 매출 및 이익분석의
            자동화를 구현하고있는 글로벌 역진구 시장의 관리 자동화 솔루션 및
            서비스 개발 회사입니다.
          </p>
          <p>
            슬라이드 가능한 컨텐츠입니다.
            <br />
            5번 째 이미지는 hover시 gif로 변환됩니다.
          </p>
          <Swiper
            className="imgBox imgBox_v2"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_acSell01.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_acSell02.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_acSell03.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_acSell04.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide gif">
              <img
                className="static"
                src={require("../resources/images/cont/cont_acSell05.png")}
                alt=""
              />
              <img
                className="animated"
                src={require("../resources/images/cont/cont_acSell05.gif")}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          {/* <i className="cont cont_zik"><em className="hidden">zikbank</em></i>*/}
          {/* <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span> */}
          <p className="text text_v4">
            mfa 환경에서 작업 ( 마이크로 프론트엔드 아키텍처) api 연동 작업
            (swagger) React 기반의 프로젝트 프론트엔드 UI 개발 MUI Component
            library, 부트스트랩 활용 UI 개발 C# 기반의 퍼블리싱 개발 ( 로그인,
            회원가입 UI ) Azure DevOps 등 git을 이용한 브랜치 활용 및 코드 관리
            사이트 오픈 참여(https://cbec.acsell.ai/signin)
          </p>
        </div>
        <div className="btnBox btnBox_v3 pT80">
          <button
            className="text text_v4 underline prevBtn"
            onClick={() => navigate(-1)}
          >
            Turn back to page 1
          </button>
          <a
            className="text text_v4 underline"
            href="https://staging.zikpay.com/"
            target="_blank"
            rel="noreferrer"
          >
            Go to site
          </a>
        </div>
      </div>
    </>
  );
}
export default PORTFOLIO10;
