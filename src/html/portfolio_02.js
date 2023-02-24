import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO02() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">TAILORSHIP</p>
          <p className="text text_v5">작업 기간 : 22.08.25 - 22.09.02</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            온라인 남성전문 맞춤 플랫폼, 테일러쉽 나에게만 잘 어울리는 옷이
            있다면 좋겠다'는 생각을 했습니다. 어떻게 찾을 수 있을까요? 전국
            어디서든 찾을 수 있을까요? 예약이나 상담이 가능할까요? 내 위치에서
            가까운 양복점을 찾을 수 있을까요? 남성 맞춤옷에 대한 고민을
            해결해드릴 수 있는 유일한 플랫폼, '테일러쉽' 입니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_tailor">
              <em className="hidden">tailor</em>
            </i>
          </p>
          <p className="text text_v4">
            퍼블리셔 한 분과 협업하여 만든 모바일 사이트입니다. 공통 폼요소를
            먼저 파악한 후 퍼블리싱 했습니다. 자세한 작업 화면은 우측 하단
            클릭하면 이동하여 볼 수 있습니다.
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
            href="http://gtnwl.dothome.co.kr/suji_porl/html/p05.html"
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
export default PORTFOLIO02;
