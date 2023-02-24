import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO07() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">INNOCEAN</p>
          <p className="text text_v5">작업 기간 : 22.06.14 - 22.06.23</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            주식회사 이노션은 2005년 5월 설립된 대한민국의 광고 회사로
            현대자동차그룹의 계열사입니다. 사명은 ‘Innovation’과 ‘Ocean’의
            합성어입니다. 2005년 5월 설립되었으며, 설립 첫 해부터 해외법인을
            세우고 해외 시장으로 사업영역을 확장하였습니다. 광고 등의 마케팅
            서비스를 제공하고 있습니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_inno">
              <em className="hidden">inno</em>
            </i>
          </p>
          <p className="text text_v4">
            반응형 페이지이며 메인페이지, 서브페이지 퍼블리싱 작업을 했습니다.
            자세한 작업 화면은 우측 하단 클릭하면 이동하여 볼 수 있습니다.
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
            target="_blank"
            href="http://gtnwl.dothome.co.kr/suji_porl/html/p01.html"
            rel="noreferrer"
          >
            Go to site
          </a>
        </div>
      </div>
    </>
  );
}
export default PORTFOLIO07;
