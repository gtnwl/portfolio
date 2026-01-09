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
        <p className="text text_v4 text_gray pL10">{typs.text}</p>
      </div>
    );
  };

  return (
    <div className="resume">
      <div className="flex-column">
        <h3 className="sub_title bB bBBold">SUMMARY</h3>
        <p className="text">
          Frontend Developer with over 2 years of experience specializing in
          building admin dashboards and UI components for SaaS, ERP, and
          financial platforms using{" "}
          <span className="text text_point">Vue.js, React, TypeScript</span>,
          and <span className="text text_point">JavaScript</span>. Strong
          foundation in web publishing and responsive UI/UX design. Skilled in
          API integration, testing, and collaborating in Agile environments
          using <span className="text text_point">Git, Postman, Swagger</span>,
          and <span className="text text_point">Figma</span>.
        </p>
      </div>
      <div>
        <h3 className="sub_title bB bBBold">LANGUAGE</h3>
        <div className="flex-row gap40">
          <ul className="left flex-column gap5 flex_1">
            <li className="flex-row space-between align-items-center">
              <p className="text">Korean</p>
              <BoxContainer type="A" />
            </li>
          </ul>
          <ul className="right flex-column gap5 flex_1">
            <li className="flex-row space-between align-items-center">
              <p className="text">English</p>
              <BoxContainer type="D" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-column">
        <h3 className="sub_title bB bBBold">SKILLS</h3>
        <div className="text">
          <p className="text text_point">[Frontend]</p>
          <p>
            <span className="text text_point">Vue.js, React.js</span>,
            JavaScript, TypeScript, HTML5, CSS3, SCSS, jQuery, Material-UI
            (MUI), Bootstrap
          </p>
        </div>
        <div className="text">
          <p className="text text_point">[API & Tools]</p>
          <p>
            <span className="text text_point">Swagger, Postman</span>, Axios,
            RESTful API, SheetJS, Git, GitLab, Bitbucket, Azure DevOps, SVN
          </p>
        </div>
        <div className="text">
          <p className="text text_point">[Design]</p>
          <p>
            <span className="text text_point">Figma</span>, Adobe Photoshop,
            Adobe Illustrator
          </p>
        </div>
        <div className="text">
          <p className="text text_point">[Collaboration]</p>
          <p>Jira, Slack, Notion, Confluence, Atlassian</p>
        </div>
        <div className="text">
          <p className="text text_point">[Others]</p>
          <p>Excel, PowerPoint, Word</p>
        </div>
      </div>
      <div className="flex-column">
        <h3 className="sub_title bB bBBold">EXPERIENCE</h3>
        <div className="pT20">
          <div className="flex-row space-between pB10">
            <p className="text text_point">
              [OKESTRO Inc. (Cloud Platform Service)]
            </p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row ">
            <p className="flex_1 text flex-column">
              Frontend Developer (Junior)
              <span className="fontItalic">09/2023 - 12/2024</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal text_spacingNormal">
              <span className="text text_point">
                Designed and implemented volume backup/schedule features
              </span>{" "}
              on an admin dashboard using{" "}
              <span className="text text_point">Vue 3</span> and{" "}
              <span className="text text_point">TypeScript</span>, enhancing
              user control over deleted volume restoration and backup
              scheduling. Enabled Excel data export with{" "}
              <span className="text text_point">SheetJS</span>, allowing full
              resource data export.{" "}
              <span className="text text_point">
                Improved internal system UIs
              </span>{" "}
              for <span className="text text_point">Hana Bank</span> and{" "}
              <span className="text text_point">
                Korea Credit Information Services
              </span>
              , implemented <span className="text text_point">Chart.js</span>{" "}
              visualizations and full{" "}
              <span className="text text_point">CRUD dashboards</span>,
              increasing internal workflow efficiency.
            </p>
          </div>
        </div>
        <div className="pT50">
          <div className="flex-row space-between pB10">
            <p className="text text_point">
              [ECREMMOCE Inc. (ERP Solution Platform)]
            </p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row">
            <p className="flex_1 text flex-column">
              Frontend Developer (Junior)
              <span className="fontItalic">03/2023 - 06/2023</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Developed React-based admin UI in a{" "}
              <span className="text text_point">
                Micro Frontend Architecture (MFA)
              </span>{" "}
              environment using{" "}
              <span className="text text_point">Swagger, MUI</span>, and{" "}
              <span className="text text_point">Bootstrap</span>. Contributed to
              the launch of cbec.acsell.ai, integrating APIs and managing
              deployment via Azure DevOps.
            </p>
          </div>
        </div>
        <div className="pT50">
          <div className="flex-row space-between pB10">
            <p className="text text_point">
              [ZIKPAY Inc. (Secure Payment Platform)]
            </p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row">
            <p className="flex_1 text flex-column">
              Web Publisher
              <span className="fontItalic">10/2022 - 02/2023</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Developed admin UI with{" "}
              <span className="text text_point">HTML/CSS/JS/jQuery</span>,
              worked with <span className="text text_point">Thymeleaf</span>
              for templating. Performed{" "}
              <span className="text text_point">cross-browser testing</span> and
              Git-based branch management. Participated in launching zikpay.com.
            </p>
          </div>
        </div>
        <div className="pT50">
          <div className="flex-row space-between pB10">
            <p className="text text_point">[EZEN Inc. (SI Projects)]</p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row">
            <p className="flex_1 text flex-column">
              Web Publisher
              <span className="fontItalic">05/2022 - 09/2022</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Created responsive, accessible websites using{" "}
              <span className="text text_point">HTML, CSS, JavaScript</span>,
              and <span className="text text_point">SCSS</span>. Managed styles
              with <span className="text text_point">Gulp</span>, version
              control with <span className="text text_point">SVN</span> and{" "}
              <span className="text text_point">Git.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-column">
        <h3 className="sub_title bB bBBold">EDUCATION & TRAINING</h3>
        <div className="pT20">
          <div className="flex-row space-between pB10">
            <p className="text text_point">[IZEN Academy Deduction]</p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row ">
            <p className="flex_1 text flex-column">
              Frontend Developer (React, JavaScript)
              <span className="fontItalic">07/2023 - 09/2023</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Built interactive UIs with{" "}
              <span className="text text_point">
                JavaScript class-based OOP
              </span>
              (Object-Oriented Programming) and{" "}
              <span className="text text_point">GSAP</span>(GreenSock Animation
              Platform) animations. Followed{" "}
              <span className="text text_point">KWCAG</span>(Korea Web Content
              Accessibility Guidelines) web accessibility guidelines and
              responsive design principles.
            </p>
          </div>
        </div>
        <div className="pT50">
          <div className="flex-row space-between pB10">
            <p className="text text_point">[Green Computer Academy]</p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row">
            <p className="flex_1 text flex-column">
              UI/UX Responsive Web Publisher
              <span className="fontItalic">12/2021 - 04/2022</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Learned core React concepts,{" "}
              <span className="text text_point">Redux, React Router</span>, and
              server communication.
            </p>
          </div>
        </div>
        <div className="pT50">
          <div className="flex-row space-between pB10">
            <p className="text text_point">[BITCAMP]</p>
            <p className="text text_v3 text_point">South Korea</p>
          </div>
          <div className="flex-row">
            <p className="flex_1 text flex-column">
              UI/UX Responsive Web Publisher
              <span className="fontItalic">12/2019 - 06/2020</span>
            </p>
            <p className="flex_1 text text_heightNormal text_spacingNormal">
              Focused on Java/JS-based web backend and frontend with{" "}
              <span className="text text_point">RESTful API</span>
              integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
