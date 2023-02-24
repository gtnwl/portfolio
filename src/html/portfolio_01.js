import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function PORTFOLIO01() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">ZIKPAY</p>
          <p className="text text_v5">작업 기간 : 22.10.27 - 23.01</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            직뱅크의 혁신적인 결제시스템과 특허기술을 통해 사용자 환경에 맞는
            시스템설계와 구축 및 운영 등 다수의 프로젝트를 수행하고 있으며,
            다양한 경험과 전문성을 바탕으로 안심 결제 기반의 다양하고 새로운
            결제 솔루션을 제공하고 있습니다.
          </p>
          <p className="text text_v4">
            건설, 제조, 유통 등 산업 전 분야에서 발생하는 용역 거래의
            지급분쟁(먹튀, 결제지연, 미수금)을 사전에 차단하고 발주자와 공급자
            협력업체까지 프로젝트에 참여한 대상 모두가 안전하게 거래할 수 있는
            혁신적인 결제시스템을 개발하여 서비스 중인 핀테크 기업입니다.
          </p>
          <p>
            슬라이드 가능한 컨텐츠입니다.
            <br />
            6,7,8번 째 이미지는 hover시 gif로 변환됩니다.
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
                src={require("../resources/images/cont/cont_zik.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_zik01.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_zik02.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_zik03.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../resources/images/cont/cont_zik04.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide gif">
              <img
                className="static"
                src={require("../resources/images/cont/cont_zik05_01.png")}
                alt=""
              />
              <img
                className="animated"
                src={require("../resources/images/cont/cont_zik05.gif")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide gif">
              <img
                className="static"
                src={require("../resources/images/cont/cont_zik06_01.png")}
                alt=""
              />
              <img
                className="animated"
                src={require("../resources/images/cont/cont_zik06.gif")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide gif">
              <img
                className="static"
                src={require("../resources/images/cont/cont_zik07_01.png")}
                alt=""
              />
              <img
                className="animated"
                src={require("../resources/images/cont/cont_zik07.gif")}
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
            소스 파일 구조파악 후, 기획서(액슈어)를 보면서 구버전 영역을
            신버전으로 css, 스크립트 수정작업 했습니다. 깃으로 형상관리를
            하였으며, 기존에 적용 되어 있는 스크립트 코드 중 이슈있는 부분을
            수정하여 정상 작동하도록 했습니다. 또한 비로그인 시 메인페이지을
            신버전으로 퍼블리싱 하였으며, 추가 기획 된 컨텐츠를 pc, 반응형
            제작하였습니다.
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
export default PORTFOLIO01;
