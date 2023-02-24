import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO09() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">BANDI</p>
          <p className="text text_v5">작업 기간 : 22.06.14 - 22.06.23</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            어르신들이 병원에서 안내를 받을 때 구두로만 안내를 받아 정확한
            위치를 찾기어려운 점에서 아이디어를 얻어 이 페이지를 제작하게
            되었습니다. 또한, PC 혹은 모바일로 본인의 증상을 검색하여 관련
            의료진 스케줄표 확인,예약을 할 수 있으며 지도를 보면서 길도 찾을 수
            있도록 제작하였습니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_bandi">
              <em className="hidden">bandi</em>
            </i>
          </p>
          <p className="text text_v4">
            디자인과 기획은 같은 학원 학생 한 분이 맡았으며 PC, MOBILE 퍼블리싱
            작업을 하였습니다. 자세한 작업 화면은 우측 하단 클릭하면 이동하여 볼
            수 있습니다.
          </p>
        </div>
        <div className="btnBox btnBox_v3 pT80">
          <button
            className="text text_v4 underline prevBtn"
            onClick={() => navigate(-1)}
          >
            Turn back to page 1
          </button>
          <div className="btnBox btnBox_v2">
            <a
              className="text text_v4 underline"
              href="http://gtnwl.dothome.co.kr/bandi/index.php"
              target="_blank"
              rel="noreferrer"
            >
              Go to site PC
            </a>
            <a
              className="text text_v4 underline"
              href="http://gtnwl.dothome.co.kr/bandi/mobile/index.php"
              target="_blank"
              rel="noreferrer"
            >
              Go to site MO
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default PORTFOLIO09;
