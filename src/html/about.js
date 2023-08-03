import React from "react";
import "../resources/sass/common.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Contact } from "./components/contact";
import Box from "@mui/material/Box";
import { LinkButton } from "./components/button";
const ABOUT = () => {
  return (
    <Grid container p={5} sx={{ gap: "50px" }}>
      <Grid container sx={{ gap: "20px" }}>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          '늦었다’고 생각이 들 때가 가장 늦었다. 잠시 쉬어도 좋으니 모든 순간을
          망설이지말고, 두려워하지말고 도전하자.
        </Typography>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          저는 늦었다는 생각이 드는 순간 '아, 조금만 더 빨리 시도해볼 걸 안 해서
          후회하는 것보다 해보고 후회하는게 더 남는게 있을텐데.'라는 후회와
          자책감에 빠졌습니다.
        </Typography>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          퍼블리셔가 되기까지 많은 고민을 했습니다. 새로운 직무로 전향 한다는
          것은 누구에게나 어려운 선택이기 때문이니까요. 하지만 고민만 하다가는
          시간만 낭비할 거 같다는 생각이 들었습니다. 제가 만든 화면들이 하나씩
          늘어날때마다 제 선택이 틀리지 않았다는 걸 알았습니다. 하면 할 수록
          새로운 것들을 배우는 것에 대해, 제가 만들어낸 결과물이 나오는 것에
          대해 뿌듯함을 느꼈고 더욱 욕심이 났습니다.
        </Typography>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          퍼블리셔로 일하면서 웹 개발에 대한 지식과 경험을 쌓을 수 있었지만,
          프론트엔드 개발자로 전향하면 더욱 다양하고 도전적인 프로젝트에 참여할
          수 있지 않을까? 라는 생각이 들었습니다.
        </Typography>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          퍼블리셔로서의 업무 경험을 바탕으로 프론트엔드 개발 능력을 갖추게
          되면, 보다 전문적이고 다양한 업무를 수행할 수 있을 것이라 믿습니다.
        </Typography>
        <Typography component="h3" sx={{ fontSize: "18px" }}>
          감사합니다.
        </Typography>
      </Grid>
      <Grid
        sx={{
          margin: "0 0 0 auto",
          textAlign: "right",
          paddingRight: "10px",
          borderRight: "3px solid !important",
        }}
      >
        <Box>
          <Typography component="h3" sx={{ fontSize: "18px" }}>
            Gitgub
          </Typography>
          <LinkButton
            to="https://github.com/gtnwl/portfolio.git"
            text="https://github.com/gtnwl/portfolio.git"
          />
        </Box>
        <Box>
          <Typography component="h3" sx={{ fontSize: "18px" }}>
            Notion
          </Typography>
          <LinkButton
            to="https://unequaled-apogee-7cd.notion.site/SUJI-NOTION-18711874fbf641a49ad0f13e548bee01?pvs=4"
            text="https://www.notion.so/SUJI-NOTION"
          />
        </Box>
      </Grid>
      <Contact />
    </Grid>
  );
};
export default ABOUT;
