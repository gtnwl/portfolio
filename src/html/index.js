import React from "react";
import "../resources/sass/common.scss";
function INDEX() {
  return (
    <>
      <body className="main mainBg">
        <div className="wrap flex-fix">
          <div className="container index">
            {/* header */}
            {/* @@include('@@webRoot/html/include/header.html') */}
            {/* header */}
            <div className="contents index" id="index1">
              <h2 className="title sub_title">PORTFOLIO</h2>
              <div className="itemBox itemBox_v1 pT50 portfolio">
                <div className="item item_v1" data-index="tab-1">
                  <a href="#;" title="" className="btnBox" data-index="01">
                    {/*<img
                      src="../resources/images/cont/cont_01.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_zik">
                      <em className="hidden">bandi</em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">ZIKPAY</p>
                      <p className="text text_v6">
                        #HTML #CSS #JAVASCRIPT #GIT
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item item_v1" data-index="tab-2">
                  <a href="#;" title="" className="btnBox" data-index="02">
                    {/*<img
                      src="../resources/images/cont/cont_02.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
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
                    {/*<img
                      src="../resources/images/cont/cont_03.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
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
                    {/*<img
                      src="../resources/images/cont/cont_04.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
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
                    {/*<img
                      src="../resources/images/cont/cont_05.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_tobe">
                      <em className="hidden"></em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">TOBEMALL</p>
                      <p className="text text_v6">
                        #HTML #SCSS #JAVASCRIPT #SVN
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item item_v1" data-index="tab-6">
                  <a href="#;" title="" className="btnBox" data-index="06">
                    {/*<img
                      src="../resources/images/cont/cont_06.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_baba">
                      <em className="hidden"></em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">BABATHE</p>
                      <p className="text text_v6">
                        #HTML #SCSS #JAVASCRIPT #GIT
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item item_v1" data-index="tab-7">
                  <a href="#;" title="" className="btnBox" data-index="07">
                    {/*<img
                      src="../resources/images/cont/cont_07.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_inno">
                      <em className="hidden"></em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">INNOCEAN</p>
                      <p className="text text_v6">
                        #HTML #SCSS #JAVASCRIPT #SVN
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item item_v1" data-index="tab-8">
                  <a href="#;" title="" className="btnBox" data-index="08">
                    {/*<img
                      src="../resources/images/cont/cont_08.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_catbox">
                      <em className="hidden"></em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">CATBOX</p>
                      <p className="text text_v6">
                        #HTML #CSS3 #JAVASCRIPT #FIGMA
                      </p>
                    </div>
                  </a>
                </div>
                <div className="item item_v1" data-index="tab-9">
                  <a href="#;" title="" className="btnBox" data-index="09">
                    {/*<img
                      src="../resources/images/cont/cont_09.svg"
                      alt=""
                      className="img-responsive"
                    />*/}
                    <i className="icon icon_bandi">
                      <em className="hidden"></em>
                    </i>
                    <div className="textBox">
                      <p className="text text_v4">BANDI</p>
                      <p className="text text_v6">
                        #HTML #CSS3 #JAVASCRIPT #FIGMA
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
                      공통으로 사용하는 폼요소 className명 생성하여 효율적인
                      코딩 가능
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
                    <li className="text text_v5">
                      디자이너와 협력하여 툴 사용 가능
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contents index" id="index3">
              <h2 className="title sub_title">ABOUT ME</h2>
              <div className="textWrap gap30 pT50">
                <div className="imgBox">
                  {/*<img src="../resources/images/frofile.svg" alt="내사진" />*/}
                </div>
                <div className="textBox gap30">
                  <p className="text text_v4">
                    '늦었다’고 생각이 들 때가 가장 늦었다. 잠시 쉬어도 좋으니
                    모든 순간을 망설이지말고, 두려워하지말고 도전하자.
                  </p>
                  <p className="text text_v4">
                    저는 늦었다는 생각이 드는 순간 '아, 조금만 더 빨리 시도해볼
                    걸 안 해서 후회하는 것보다 해보고 후회하는게 더 남는게
                    있을텐데.'라는 후회와 자책감에 빠졌습니다.
                  </p>
                  <p className="text text_v4">
                    퍼블리셔가 되기까지 많은 고민을 했습니다. 새로운 직무로 전향
                    한다는 것은 누구에게나 어려운 선택이기 때문이니까요. 하지만
                    고민만 하다가는 시간만 낭비할 거 같다는 생각이 들었습니다.
                  </p>
                  <p className="text text_v4">
                    퍼블리싱을 배우면서 제 선택이 틀리지 않았다는 걸 알았습니다.
                    하면 할 수록 새로운 것들을 배우는 것에 대해,제가 만들어낸
                    결과물이 나오는 것에 대해 뿌듯함을 느꼈기 때문입니다. 앞으로
                    더욱 도전하여 성장할 수 있는 홍수지가 되겠습니다.
                  </p>
                  <p className="text text_v4">감사합니다.</p>
                </div>
              </div>
            </div>
            {/* footer */}
            {/* @@include('@@webRoot/html/include/footer.html') */}
            {/* footer  */}
          </div>
        </div>
      </body>
    </>
  );
}
export default INDEX;
