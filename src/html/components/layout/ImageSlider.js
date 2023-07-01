import React from "react";
import { useLocation } from "react-router-dom";
import ReactSwipe from "react-swipe";
import "./image-slider.css";
import Button from "@mui/material/Button";
import projectsImgData from "../../projects/projectsImg.json";

const ImageSlider = ({ startIndex, props: MediaProps }) => {
  const urls = projectsImgData.data;
  let reactSwipeEl;
  const location = useLocation();
  let path = location.pathname.replace("/", "");

  let imgLength = urls
    .filter((data) => path === data.name)
    .map((data) => Object.keys(data.imgs[0]).length);

  const SlideButton = ({ text }) => {
    return (
      <>
        <Button
          sx={
            1 === imgLength[0]
              ? {
                  display: "none",
                }
              : {
                  borderRadius: "4px !important",
                }
          }
          onClick={() => {
            text === "prev" ? reactSwipeEl.prev() : reactSwipeEl.next();
          }}
        >
          {text}
        </Button>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          boxSizing: "border-box",
          maxWidth: "1200px",
          width: "100%",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SlideButton text={"prev"} />

        <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: false,
            speed: 400,
            startSlide: startIndex,
          }}
          ref={(el) => (reactSwipeEl = el)}
          childCount={imgLength[0]}
        >
          {urls
            .filter((datas) => path === datas.name)
            .map((datas) => {
              const imgItemArray = Object.values(datas.imgs[0]);
              return imgItemArray.map((item) => {
                return (
                  <div key={item}>
                    <img src={item} alt="" />
                  </div>
                );
              });
            })}
        </ReactSwipe>
        <SlideButton text={"next"} />
      </div>
    </>
  );
};

export default ImageSlider;
