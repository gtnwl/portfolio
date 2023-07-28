import React from "react";
import "../resources/sass/common.scss";
import $ from "jquery";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import skillsData from "./skillsData.json";

const SKILLS = () => {
  const skillData = skillsData.data;

  const $container = $(".sub .container");
  $container.addClass("subMovePage");
  return (
    <>
      <Grid
        className="contents index"
        id="index2"
        flexDirection="column"
        sx={{ display: "flex", gap: "50px" }}
      >
        <Grid container justifyContent="center" sx={{ gap: "20px" }}>
          {skillData.map((card) => {
            const id = card.index;
            const textsArray = Object.values(card.texts[0]);
            return (
              <Card key={id} elevation={3} sx={{ flex: 1, minWidth: "200px" }}>
                <CardContent>
                  <Typography
                    variant="b"
                    component="h3"
                    pb={1}
                    sx={{
                      fontSize: "22px",
                      color: "#000 !important",
                      "&:hover": { color: "#000 !important" },
                    }}
                  >
                    {card.title}
                  </Typography>
                  {textsArray.map((item) => {
                    return (
                      <Typography
                        pt={1}
                        key={item}
                        sx={{
                          fontSize: "1.12rem",
                          color: "#000 !important",
                          "&:hover": { color: "#000 !important" },
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default SKILLS;
