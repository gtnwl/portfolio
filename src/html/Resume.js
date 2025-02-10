import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../resources/sass/common.scss";
import "../resources/sass/component.scss";
// import * as FNC from "../resources/js/common.js";
import mainData from "./mainData.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Resume = () => {
  let navigate = useNavigate();
  const boxTypes = {
    A: { full: 5, outline: 0, text: "Native Language" },
    B: { full: 4, outline: 1, text: "Advanced" },
    C: { full: 3, outline: 2, text: "Upper intermediate" },
    D: { full: 2, outline: 3, text: "Intermediate" },
    E: { full: 1, outline: 4, text: "-" },
    F: { full: 0, outline: 5, text: "-" },
  };

  const BoxContainer = ({ type }) => {
    const typs = boxTypes[type] || { full: 0, outline: 0, text: "-" };

    return (
      <div className={`square-wrap type-${type}`}>
        {Array.from({ length: typs.full }).map((_, i) => (
          <p key={`full-${i}`} className="square-box square-full"></p>
        ))}
        {Array.from({ length: typs.outline }).map((_, i) => (
          <p key={`outline-${i}`} className="square-box square-outline"></p>
        ))}
        <p className="text_v6Gray">{typs.text}</p>
      </div>
    );
  };

  return (
    <div className="resume">
      <div className="overview flex-row border-center gap40">
        <ul className="left flex-column gap5 flex_1">
          <li>
            <p className="title title_small_v1 flex-row space-between align-items-center">
              EXPERIENCE OVERVIEW <span className="text text_v6">2+ Years</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v4">
              - Cloude Platform Service Inc.
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v4">
              - ERP Solution Platform Service Inc.
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v5">
              - Secure Payment Solution Platform Service Inc.
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v5">
              - SI Inc. <span className="text text_v7">South Korea</span>
            </p>
          </li>
        </ul>
        <ul className="right flex-column gap5 flex_1 ">
          <li className="title title_small_v1"> EDUCATION OVERVIEW</li>
          <li>
            <p className="flex-row space-between align-items-center text_v5">
              - Frontend Development (React, JavaScript)
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v5">
              - UI/UX Responsive Web Publisher
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
          <li>
            <p className="flex-row space-between align-items-center text_v5">
              - Full Stack Java Web Developer
              <span className="text text_v7">South Korea</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="language ">
        <p className="title title_small_v1">LANGUAGE</p>
        <div className="flex-row border-center gap40">
          <ul className="left flex-column gap5 flex_1">
            <li className="flex-row space-between align-items-center">
              <p className="text_v5">Korean</p>
              <BoxContainer type="A" />
            </li>
          </ul>
          <ul className="right flex-column gap5 flex_1">
            <li className="flex-row space-between align-items-center">
              <p className="text_v5">English</p>
              <BoxContainer type="D" />
            </li>
          </ul>
        </div>
      </div>
      <div className="skills ">
        <p className="title title_small_v1">SKILLS</p>
        <div className="commu ">
          <p className="text_v4Bold">Communication</p>
          <div className="flex-row border-center gap40">
            <ul className="left flex-column gap5 flex_1">
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_notion">
                    <em className="hidden">notion</em>
                  </i>
                  Notion
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_atl">
                    <em className="hidden">atl</em>
                  </i>
                  Atlassian
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_git">
                    <em className="hidden">git</em>
                  </i>
                  Github
                </p>
                <BoxContainer type="C" />
              </li>
            </ul>
            <ul className="right flex-column gap5 flex_1">
              <li className=" flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_slack">
                    <em className="hidden">slack</em>
                  </i>
                  Slack
                </p>
                <BoxContainer type="A" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_jira">
                    <em className="hidden">jira</em>
                  </i>
                  Jira
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_bit">
                    <em className="hidden">bit</em>
                  </i>
                  Bitbucket
                </p>
                <BoxContainer type="C" />
              </li>
            </ul>
          </div>
        </div>
        <div className="teach ">
          <p className="text_v4Bold">Teach Stack</p>
          <div className="flex-row border-center gap40">
            <ul className="left flex-column gap5 flex_1">
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_react">
                    <em className="hidden">react</em>
                  </i>
                  React
                </p>
                <BoxContainer type="D" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_js">
                    <em className="hidden">js</em>
                  </i>
                  JavaScript
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_html">
                    <em className="hidden">html</em>
                  </i>
                  HTML5
                </p>
                <BoxContainer type="A" />
              </li>
              <li className=" flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_scss">
                    <em className="hidden">scss</em>
                  </i>
                  SCSS
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_axios">
                    <em className="hidden">axios</em>
                  </i>
                  Axios
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_swagger">
                    <em className="hidden">swagger</em>
                  </i>
                  Swagger
                </p>
                <BoxContainer type="B" />
              </li>
            </ul>
            <ul className="right flex-column gap5 flex_1">
              <li className=" flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_vue">
                    <em className="hidden">vue</em>
                  </i>
                  Vue
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_ts">
                    <em className="hidden">ts</em>
                  </i>
                  TypeScript
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_css">
                    <em className="hidden">css</em>
                  </i>
                  CSS
                </p>
                <BoxContainer type="A" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_mui">
                    <em className="hidden">mui</em>
                  </i>
                  Material-UI(MUI)
                </p>
                <BoxContainer type="C" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_post">
                    <em className="hidden">post</em>
                  </i>
                  Postman
                </p>
                <BoxContainer type="C" />
              </li>
            </ul>
          </div>
        </div>
        <div className="design ">
          <div className="flex-row border-center gap40">
            <ul className="left flex-column gap5 flex_1">
              <li className="text_v4Bold">Design - UI/UX</li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_figma">
                    <em className="hidden">figma</em>
                  </i>
                  Figma
                </p>
                <BoxContainer type="B" />
              </li>
            </ul>
            <ul className="right flex-column gap5 flex_1">
              <li className="text_v4Bold">Design -Graphic</li>
              <li className=" flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_ps">
                    <em className="hidden">ps</em>
                  </i>
                  Adobe Photoshop
                </p>
                <BoxContainer type="D" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_ai">
                    <em className="hidden">ai</em>
                  </i>
                  Adobe illustrator
                </p>
                <BoxContainer type="D" />
              </li>
            </ul>
          </div>
        </div>
        <div className="oa ">
          <p className="text_v4Bold">OA</p>
          <div className="flex-row border-center gap40">
            <ul className="left flex-column gap5 flex_1">
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_word">
                    <em className="hidden">word</em>
                  </i>
                  Word
                </p>
                <BoxContainer type="B" />
              </li>
              <li className="flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_point">
                    <em className="hidden">point</em>
                  </i>
                  Power Point
                </p>
                <BoxContainer type="C" />
              </li>
            </ul>
            <ul className="right flex-column gap5 flex_1">
              <li className=" flex-row space-between align-items-center">
                <p className="text_v5 flex-row align-items-center ">
                  <i className="icon icon_excel">
                    <em className="hidden">excel</em>
                  </i>
                  Excel
                </p>
                <BoxContainer type="C" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
