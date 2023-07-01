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
const INDEX = ({ onClick }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const projectsData = mainData.data;

  useEffect(() => {
    FNC.groupFunction();
  }, [location]);

  const moveToSubPage = (data) => {
    navigate("/" + data);
  };

  return (
    <>
      <Grid container p={5} sx={{ gap: "50px" }}>
        <Typography component="h2" variant="div" sx={{ fontSize: "64px" }}>
          PROJECTS
        </Typography>
        <Grid container justifyContent="center" sx={{ gap: "50px" }}>
          {projectsData.map((card) => {
            const id = card.index;
            return (
              <Card key={id} elevation={3}>
                <CardActionArea
                  onClick={() => {
                    moveToSubPage(card.localName);
                  }}
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
                  <CardMedia component="img" height="253" image={card.logo} />
                  {card.explanation.map((item) => {
                    return (
                      <CardContent
                        key={id}
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
        {/* <Grid>
          <Typography>acsell</Typography>
          <img
            src={require("../resources/images/cont/cont_acSell01.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_acSell02.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_acSell03.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_acSell04.png")}
            alt=""
          />
          <img
            className="animated"
            src={require("../resources/images/cont/cont_acSell05.gif")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>zikbank</Typography>
          <img src={require("../resources/images/cont/cont_zik.png")} alt="" />
          <img
            src={require("../resources/images/cont/cont_zik01.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_zik02.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_zik03.png")}
            alt=""
          />
          <img
            src={require("../resources/images/cont/cont_zik04.png")}
            alt=""
          />
          <img
            className="animated"
            src={require("../resources/images/cont/cont_zik05.gif")}
            alt=""
          />
          <img
            className="animated"
            src={require("../resources/images/cont/cont_zik06.gif")}
            alt=""
          />
          <img
            className="animated"
            src={require("../resources/images/cont/cont_zik07.gif")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>TAILORSHIP</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_tailor.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>전국공무원상조서비스</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_sangjo.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>저작권비즈니스지원센터</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_copyright.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>TOBEMALL</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_tobe.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>BABATHE.COM</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_baba.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>INNOCEAN</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_inno.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>CATBOX</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_catbox.png")}
            alt=""
          />
        </Grid>
        <Grid>
          <Typography>BANDI</Typography>
          <img
            className="animated"
            src={require("../resources/images/cont/cont_bandi.png")}
            alt=""
          />
        </Grid> */}
      </Grid>
    </>
  );
};
export default INDEX;
