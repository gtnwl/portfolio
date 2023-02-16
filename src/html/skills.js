import React from "react";
import "../resources/sass/common.scss";
import $ from "jquery";
function SKILLS() {
  const $container = $(".sub .container");
  $container.addClass("subMovePage");
  return (
    <>
      <div className="contents index" id="index2">
        <h2 className="title sub_title">SKILLS</h2>
        <div className="itemBox itemBox_v2 pT50">
          <div className="item item_v2">
            <p className="text pB25">HTML</p>
            <ul className="textBox gap10">
              <li className="text text_v5">
                웹표준 및 웹접근성을 항상 고려하여 마크업을 작성
              </li>
              <li className="text text_v5">시멘틱태그 사용 가능</li>
              <li className="text text_v5">
                공통으로 사용하는 폼요소 className명 생성하여 효율적인 코딩 가능
              </li>
            </ul>
          </div>
          <div className="item item_v2">
            <p className="text pB25">CSS</p>
            <ul className="textBox gap10">
              <li className="text text_v5">
                브라우저 호환성을 고려한 코딩 가능(반응형)
              </li>
              <li className="text text_v5">
                공통으로 사용하는 폼요소 생성하여 효율적인 코딩 가능
              </li>
              <li className="text text_v5">SCSS 사용 가능</li>
            </ul>
          </div>
          <div className="item item_v2">
            <p className="text pB25">JAVASCRIT & JQUERY</p>
            <ul className="textBox gap10">
              <li className="text text_v5">
                JavaScript와 jQuery의 기본 구조를 이해하며 활용 가능
              </li>
              <li className="text text_v5">선택자, 오픈소스 활용 가능</li>
            </ul>
          </div>
          <div className="item item_v2">
            <p className="text pB25">FIGMA</p>
            <ul className="textBox gap10">
              <li className="text text_v5">디자이너와 협력하여 툴 사용 가능</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default SKILLS;
