import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO03() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">전국공무원상조서비스</p>
          <p className="text text_v5">작업 기간 : 22.08.01 - 22.08.19</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            그동안 많은 국민들이 상조회사 영업사원 또는 지인의 부탁으로
            장례서비스 내용 및 비용을 깊이 따져보지 못하고 선불식 상조회사에
            가입을 하다 보니 사회적으로 큰 문제가 되고 말았습니다. 선불식
            상조회사의 문제점은 파산의 위험뿐 아니라 나중에 더 저렴하고 더 질
            좋은 상품을 이용하려면 손해를 보고 해약해야 하는 불이익이 있습니다.
            이런 사회적 문제를 없애고자 2006년 완전후불제 전국공무원상조가 설립
            되었습니다
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_sangjo">
              <em className="hidden">sangjo</em>
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
            href="http://gtnwl.dothome.co.kr/suji_porl/html/p04.html"
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
export default PORTFOLIO03;
