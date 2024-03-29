import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import $ from "jquery";
import { Grid, Typography } from "@mui/material";
function INDEX() {
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    FNC.groupFunction();

    let path = location.pathname.replace("/", "");

    //$("#" + path).addClass("active");
  }, [location]);
  const moveSubPage = (page) => {
    // 이벤트 초기화
    $(".container.index").removeClass("movePage");
    $(".container.index").removeClass("subMovePage");

    // 왼쪽에서 오른쪽 이벤트
    $(".container.index").addClass("movePage");

    setTimeout(function () {
      // 동그라미 지우기
      $(".nav .slide").removeClass("active");

      setTimeout(function () {
        // 동그라미 그리기
        $("#portfolio").addClass("active");

        // 페이지 이동
        navigate("/" + page);

        // 오른쪽에서 왼쪽 이벤트
        $(".container.index").removeClass("movePage");
        $(".container.index").addClass("subMovePage");
      }, 600);
    }, 600);
  };

  return (
    <>
      {/* header */}
      {/*@@include('@@webRoot/html/include/header.html')*/}
      {/* header */}
      <Grid container id="index1" p={5} justifyContent="center">
        <Typography
          component="h2"
          variant="div"
          align="center"
          sx={{ fontSize: "64px" }}
        >
          PROJECTS
        </Typography>
        <Grid container className="itemBox itemBox_v1 portfolio" sx={{ pt: 5 }}>
          <div className="item item_v1" data-index="tab-1">
            <button
              onClick={() => moveSubPage("portfolio01")}
              className="btnBox"
              data-index="01"
            >
              <img
                src={require("../resources/images/cont/cont_10.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_acsell">
                <em className="hidden">acSell</em>
              </i>
              <div className="textBox">
                <p className="text text_v4">acSell</p>
                <p className="text text_v6">
                  #mfa #api연동(swagger) #React #MUI #AzureDevOps #CSS
                </p>
              </div>
            </button>
          </div>
          <div className="item item_v1" data-index="tab-1">
            <button
              onClick={() => moveSubPage("portfolio01")}
              className="btnBox"
              data-index="01"
            >
              <img
                src={require("../resources/images/cont/cont_01.svg").default}
                alt=""
                className="img-responsive"
              />
              <i className="icon icon_zik">
                <em className="hidden">ZIKPAY</em>
              </i>
              <div className="textBox">
                <p className="text text_v4">ZIKPAY</p>
                <p className="text text_v6">#HTML #CSS #JAVASCRIPT #GIT</p>
              </div>
            </button>
          </div>
          <div className="item item_v1" data-index="tab-2">
            <button
              onClick={() => moveSubPage("portfolio02")}
              className="btnBox"
              data-index="02"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-3">
            <button
              onClick={() => moveSubPage("portfolio03")}
              className="btnBox"
              data-index="03"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-4">
            <button
              onClick={() => moveSubPage("portfolio04")}
              className="btnBox"
              data-index="04"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-5">
            <button
              onClick={() => moveSubPage("portfolio05")}
              className="btnBox"
              data-index="05"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-6">
            <button
              onClick={() => moveSubPage("portfolio06")}
              className="btnBox"
              data-index="06"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-7">
            <button
              onClick={() => moveSubPage("portfolio07")}
              className="btnBox"
              data-index="07"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-8">
            <button
              onClick={() => moveSubPage("portfolio08")}
              className="btnBox"
              data-index="08"
            >
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
            </button>
          </div>
          <div className="item item_v1" data-index="tab-9">
            <button
              onClick={() => moveSubPage("portfolio09")}
              className="btnBox"
              data-index="09"
            >
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
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default INDEX;
