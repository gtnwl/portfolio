import React from "react";
import "../resources/sass/common.scss";
function ABOUT() {
  return (
    <>
      <div className="contents index" id="index3">
        <h2 className="title sub_title">ABOUT ME</h2>
        <div className="textWrap gap30 pT50">
          <div className="imgBox">
            <img
              src={require("../resources/images/frofile.svg").default}
              alt="내사진"
            />
          </div>
          <div className="textBox gap30">
            <p className="text text_v4">
              '늦었다’고 생각이 들 때가 가장 늦었다. 잠시 쉬어도 좋으니 모든
              순간을 망설이지말고, 두려워하지말고 도전하자.
            </p>
            <p className="text text_v4">
              저는 늦었다는 생각이 드는 순간 '아, 조금만 더 빨리 시도해볼 걸 안
              해서 후회하는 것보다 해보고 후회하는게 더 남는게 있을텐데.'라는
              후회와 자책감에 빠졌습니다.
            </p>
            <p className="text text_v4">
              퍼블리셔가 되기까지 많은 고민을 했습니다. 새로운 직무로 전향
              한다는 것은 누구에게나 어려운 선택이기 때문이니까요. 하지만 고민만
              하다가는 시간만 낭비할 거 같다는 생각이 들었습니다.
            </p>
            <p className="text text_v4">
              퍼블리싱을 배우면서 제 선택이 틀리지 않았다는 걸 알았습니다. 하면
              할 수록 새로운 것들을 배우는 것에 대해,제가 만들어낸 결과물이
              나오는 것에 대해 뿌듯함을 느꼈기 때문입니다. 앞으로 더욱 도전하여
              성장할 수 있는 홍수지가 되겠습니다.
            </p>
            <p className="text text_v4">감사합니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ABOUT;
