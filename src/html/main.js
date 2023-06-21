import React, { useEffect, useCallback, useBoolean, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../resources/sass/common.scss";
import * as FNC from "../resources/js/common.js";
import mainData from "./mainData.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { useBoolean, useLocale } from "Lib/hooks";
import $ from "jquery";
const INDEX = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const projectsDate = mainData.data;
  // const showImageModal = useBoolean(false);
  // const [image, setImage] = useState({ imageUrl: null, title: null });
  // const handleImageClick = useCallback(
  //   (image, title) => {
  //     showImageModal.setTrue();
  //     setImage({ imageUrl: image, title: title });
  //   },
  //   [showImageModal]
  // );
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
      <Grid container p={5} id="index1" sx={{ gap: "50px" }}>
        <Typography component="h2" variant="div" sx={{ fontSize: "64px" }}>
          PROJECTS
        </Typography>
        <Grid container justifyContent="center" sx={{ gap: "50px" }}>
          {projectsDate.map((card) => {
            const id = card.id;
            return (
              <Card key={id} elevation={3}>
                <CardActionArea
                  // onClick={handleImageClick}
                  sx={{
                    height: "340px",
                    width: "340px",
                    overflow: "hidden",
                    "& > img": {
                      position: "absolute",
                      top: "0",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="237"
                    image={card.img}
                    sx={{ opacity: "0.3", filter: "blur(2px)" }}
                  />
                  <CardMedia component="img" height="253" image={card.logo} />
                  {card.explanation.map((item) => {
                    return (
                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          right: "0",
                          borderTop: "solid 2px black",
                          minHeight: "104px",
                          boxSizing: "border-box",
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.skill}
                        </Typography>
                      </CardContent>
                    );
                  })}
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default INDEX;
