import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO04() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">저작권비즈니스지원센터</p>
          <p className="text text_v5">작업 기간 : 22.08.01 ~ 22.08.19</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            저작권 비즈니스 지원센터는 저작권법에 의거한 권리자찾기정보시스템과
            저작권거래소를 통합한 서비스를 제공하며, 저작물의 권리정보를
            체계적으로 수집·관리와 저작권 이용허락 계약 체결지원 및
            저작인불명저작물 이용지원 등 저작권 유통과 관련한 서비스를
            온라인에서 간편하게 수행할 수 있도록 지원하는 서비스입니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_copyright">
              <em className="hidden">copyright</em>
            </i>
          </p>
          <p className="text text_v4">
            공통 폼요소를 먼저 파악한 후 퍼블리싱 했으며 웹 접근성을
            준수하였습니다. 자세한 작업 화면은 우측 하단 클릭하면 이동하여 볼 수
            있습니다.
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
            href="http://gtnwl.dothome.co.kr/suji_porl/html/p03_01.html"
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
export default PORTFOLIO04;
