import React, { useEffect } from "react";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
function INDEX() {
  useEffect(() => {
    FNC.groupFunction();
  });

  return (
    <>
      {/* header */}
      {/*@@include('@@webRoot/html/include/header.html')*/}
      {/* header */}
      <div className="contents index" id="index1">
        <h2 className="title sub_title">PROJECTS</h2>
        <div className="itemBox itemBox_v1 pT50 portfolio">
          <div className="item item_v1" data-index="tab-1">
            <a href="#;" title="" className="btnBox" data-index="01">
              <img
                src={require("../resources/images/cont/cont_01.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_zik">
                <em className="hidden">bandi</em>
              </i>
              <div className="textBox">
                <p className="text text_v4">ZIKPAY</p>
                <p className="text text_v6">#HTML #CSS #JAVASCRIPT #GIT</p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-2">
            <a href="#;" title="" className="btnBox" data-index="02">
              <img
                src={require("../resources/images/cont/cont_02.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_tailor">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">TAILORSHIP</p>
                <p className="text text_v6">
                  #HTML #SCSS #JAVASCRIPT #SVN #모바일
                </p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-3">
            <a href="#;" className="btnBox" data-index="03">
              <img
                src={require("../resources/images/cont/cont_03.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_sangjo">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">전국공무원상조서비스</p>
                <p className="text text_v6">
                  #HTML #SCSS #JAVASCRIPT #SVN #모바일
                </p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-4">
            <a href="#;" title="" className="btnBox" data-index="04">
              <img
                src={require("../resources/images/cont/cont_04.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_copyright">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">저작권비즈니스지원센터</p>
                <p className="text text_v6">
                  #HTML #SCSS #JAVASCRIPT #SVN #웹표준 #웹접근성
                </p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-5">
            <a href="#;" title="" className="btnBox" data-index="05">
              <img
                src={require("../resources/images/cont/cont_05.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_tobe">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">TOBEMALL</p>
                <p className="text text_v6">#HTML #SCSS #JAVASCRIPT #SVN</p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-6">
            <a href="#;" title="" className="btnBox" data-index="06">
              <img
                src={require("../resources/images/cont/cont_06.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_baba">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">BABATHE</p>
                <p className="text text_v6">#HTML #SCSS #JAVASCRIPT #GIT</p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-7">
            <a href="#;" title="" className="btnBox" data-index="07">
              <img
                src={require("../resources/images/cont/cont_07.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_inno">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">INNOCEAN</p>
                <p className="text text_v6">#HTML #SCSS #JAVASCRIPT #SVN</p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-8">
            <a href="#;" title="" className="btnBox" data-index="08">
              <img
                src={require("../resources/images/cont/cont_08.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_catbox">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">CATBOX</p>
                <p className="text text_v6">#HTML #CSS3 #JAVASCRIPT #FIGMA</p>
              </div>
            </a>
          </div>
          <div className="item item_v1" data-index="tab-9">
            <a href="#;" title="" className="btnBox" data-index="09">
              <img
                src={require("../resources/images/cont/cont_09.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_bandi">
                <em className="hidden"></em>
              </i>
              <div className="textBox">
                <p className="text text_v4">BANDI</p>
                <p className="text text_v6">#HTML #CSS3 #JAVASCRIPT #FIGMA</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default INDEX;
