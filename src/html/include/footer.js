import React from "react";
import "../../resources/sass/common.scss";

function Footer() {
  return (
    <>
      {/*<div class="contents index">
    <div class="textWrap gap100">
        <div class="imgBox">
            <img src="../resources/images/phone.png" class="phone" alt="폰아이콘">
        </div>
        <div class="textBox">
            <h2 class="title sub_title pB22">
                GET IN TOUCH
            </h2>
            <div class="btnBox contact">
                <a href='tel:010-3293-1282' class="btn">
                    <p class="text text_v4">
                        PHONE NUM
                        <span class="text text_v3">
                            010 3293 1282
                        </span>
                    </p>
                </a>
                <a href="contact.html"  class="btn">
                    <p class="text text_v4">
                        EMAIL ME
                        <span class="text text_v3">
                            CLICK HEAR
                        </span>
                    </p>
                </a>
            </div>
        </div>
    </div>
</div> */}
      <div className="contents footer index">
        <p className="text text_v6">
          이 사이트는 상업적 목적이 아닌 개인 포트폴리용으로 제작되었습니다.
        </p>
      </div>
    </>
  );
}
export default Footer;
