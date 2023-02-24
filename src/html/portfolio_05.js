import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO05() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">TOBEMALL</p>
          <p className="text text_v5">작업 기간 : 22.05.30 - 22.07.05</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            투비몰은 넥사크로의 기술력으로 만들어진 이커머스 솔루션으로 클라우드
            서비스로 제공되는 쇼핑몰 플랫폼입니다. 플랫폼 도입으로 초기 구축비용
            절감 및 빠른 기간 내 구축되고, 고객 컨설팅을 거쳐 맞춤 쇼핑몰을
            구축합니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_tobe">
              <em className="hidden">tobe</em>
            </i>
          </p>
          <p className="text text_v4">
            반응형 페이지로 메인페이지 아이콘 변경과 하단 컨텐츠 생성, 이메일폼
            작성, 서비스상담신청 아이콘 생성,팝업 생성, footer 생성했습니다.
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
            href="https://tobemall.com/"
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
export default PORTFOLIO05;
