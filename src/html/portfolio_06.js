import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import { useNavigate } from "react-router-dom";
function PORTFOLIO06() {
  const navigate = useNavigate();
  useEffect(() => {
    FNC.groupFunction();
  });
  return (
    <>
      <div className="contents index">
        <div className="titleBox pB50">
          <p className="title title_v3">BABATHE.COM</p>
          <p className="text text_v5">작업 기간 : 22.06.14 - 22.06.23</p>
        </div>
        <div className="textBox gap30">
          <p className="text text_v4">
            투비몰은 넥사크로의 기술력으로 만들어진 이커머스 솔루션으로 클라우드
            서비스로 제공되는 쇼핑몰 플랫폼입니다. 플랫폼 도입으로 초기 구축비용
            절감 및 빠른 기간 내 구축되고, 고객 컨설팅을 거쳐 맞춤 쇼핑몰을
            구축합니다.
          </p>
          <p className="imgBox imgBox_v2">
            <i className="cont cont_baba">
              <em className="hidden">baba</em>
            </i>
          </p>
          <p className="text text_v4">아이콘과 텍스트 변경 작업을 했습니다.</p>
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
            href="https://pc.babathe.com/main?gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRPmSo8bZxYDsuYE5rPiO51JelppTFqU5AqG2at6Es38hK1Zxiilz4EaAkJOEALw_wcB"
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
export default PORTFOLIO06;
