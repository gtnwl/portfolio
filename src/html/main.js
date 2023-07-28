import React, { useEffect } from "react";
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
                  <CardMedia
                    component="img"
                    height="253"
                    // eslint-disable-next-line no-useless-concat
                    image={require("../resources/images/icon/" +
                      `${card.logo}`)}
                  />
                  <CardMedia
                    component="img"
                    height="253"
                    // eslint-disable-next-line no-useless-concat
                    image={require("../resources/images/cont/" + `${card.bg}`)}
                    sx={{
                      filter: "blur(4px)",
                      backdropFilter: "blur(2px)",
                      opacity: 0.15,
                    }}
                  />
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
                          background: "#fff",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            color: "#000 !important",
                            "&:hover": { color: "#000 !important" },
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color: "#000 !important",
                            "&:hover": { color: "#000 !important" },
                          }}
                        >
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
