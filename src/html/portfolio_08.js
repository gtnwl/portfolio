import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO08() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">CATBOX</p>
          <p className="text text_v5">작업 기간 : 22.04.15 - 22.04.25</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            과거부터 ‘캣맘’에 대한 크고 작은 사회적인 문제가 존재했습니다.
            본인이 살지 않는 동네까지 와서 밥을 주거나 차 밑에 먹이를 놓아서
            고양이가 사망하고 이로 인해 주민들끼리의 언쟁이 높아지는 일들이 여러
            차례 있었습니다. 이러한 문제는 고양이 혐오뿐만 아니라 캣맘을 향한
            혐오로도 번지게 됐고 이러한 문제를 해결하고자 catBox를
            제작하였습니다.
          </p>
          <p className="text text_v4">
            시에서 운영하는 ‘따릉이’에서 아이디어를 얻어 무단으로 아무 위치에서
            고양이에게 급식을 제공하는 것이 아니라, catBox에서 자체 등록한
            위치에서만 급식소를 설치할 수 있으며, 위치 검색시 본인 위치 200m반경
            안에 위치한 catBox에 급식을 제공할 수 있습니다
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_catbox">
              <em className="hidden">catbox</em>
            </i>
          </p>
          <p className="text text_v4">
            디자인은 같은 학원 학생 한 분이 맡았으며 기획과 퍼블리싱 작업을
            하였습니다. 자세한 작업 화면은 우측 하단 클릭하면 이동하여 볼 수
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
            href="http://gtnwl.dothome.co.kr/catbox/index.html"
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
export default PORTFOLIO08;
