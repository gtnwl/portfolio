import React from "react";
import CompanyText from "../../projects/projectsImg.json";
import { useLocation } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { Chip, Grid, Typography, styled } from "@mui/material";

const CompanyDescription = () => {
  const companyTexts = CompanyText.data;
  const location = useLocation();
  let path = location.pathname.replace("/", "");
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  return (
    <>
      {companyTexts
        .filter((datas) => path === datas.name)
        .map((datas) => {
          const textsArray = Object.values(datas.texts[0]);
          const key = datas.index + datas.name;
          return (
            <Grid container className="lslsl" key={key}>
              <Typography>{datas.companyDescription}</Typography>
              <ImageSlider />
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {textsArray.map((item) => {
                  return (
                    <ListItem key={item}>
                      <Chip label={item} />{" "}
                    </ListItem>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default CompanyDescription;
