import React from "react";
import "../resources/sass/common.scss";
import "../resources/sass/component.scss";
// import * as FNC from "../resources/js/common.js";
const Resume_detial = () => {
  return (
    <div className="resume_detail flex-column">
      <p className="title title_small_v1">EXPERIENCE</p>
      <div className="card flex-row border-center">
        <div className="left left flex-column">
          <i className="cont cont_oke">
            <em className="hidden">oke</em>
          </i>
          <p className="title title_small_v1 flex_1 gridCenter textCenter">
            12/2024
            <br /> - <br />
            09/2023
          </p>
        </div>
        <div className="right flex-column lign-items-center gap20">
          <div className="flex-row align-items-center">
            <p className="left text text_point">OKESTRO Inc.</p>
            <div className="right textRight">
              <p>South Korea</p>
              <p>Frontend Developer (Junior)</p>
              <p>Cloude Platform Service Inc.</p>
            </div>
          </div>
          <dl>
            <dt className="text_v4 text_point">Admin Site</dt>
            <dd className="text_v5">
              Developed and implemented volume backup and scheduling features,
              allowing users to restore deleted volumes and schedule backups by
              selecting specific days and times, with options to edit or delete
              schedules. Additionally, created functionality to export complete
              resource data as Excel files using the SheetJS library. Used Vue 3
              and TypeScript to build the user interfaces and ensure high
              performance and scalability.
            </dd>
          </dl>
          <dl>
            <dt className="text_v4 text_point">
              Hana Bank (Internal System Admin)
            </dt>
            <dd className="text_v5">
              Improved the user interface and resolved issues on existing pages,
              utilizing Chart.js for data visualization, with Vue 3 and
              TypeScript for dynamic and responsive UI development.
            </dd>
          </dl>
          <dl>
            <dt className="text_v4 text_point">
              Korea Credit Information Services (Internal System Admin)
            </dt>
            <dd className="text_v5">
              Developed new pages with API integrations using Vue 3 and
              TypeScript, implemented CRUD operations via the dashboard, and
              enhanced the UI of existing pages while addressing functionality
              issues.
            </dd>
          </dl>
        </div>
      </div>
      <div className="card flex-row border-center">
        <div className="left left flex-column">
          <i className="cont cont_ecre">
            <em className="hidden">ecre</em>
          </i>
          <p className="title title_small_v1 flex_1 gridCenter textCenter">
            06/2023
            <br /> - <br />
            03/2023
          </p>
        </div>
        <div className="right flex-column lign-items-center gap20">
          <div className="flex-row align-items-center">
            <p className="left text text_point">ECREMMOCE Inc.</p>
            <div className="right textRight">
              <p>South Korea</p>
              <p>Frontend Developer (Junior)</p>
              <p>ERP Solution Platform Service Inc.</p>
            </div>
          </div>
          <dl>
            <dt className="text_v4 text_point">Admin Site</dt>
            <dd className="text_v5">
              Worked in a Micro Frontend Architecture (MFA) environment,
              integrating APIs using Swagger and developing frontend UIs for
              React-based projects. Built user interfaces using React and
              JavaScript, with the MUI Component Library and Bootstrap for UI
              components. Managed branches and code using Git with Azure DevOps
              and contributed to the site launch of&nbsp;
              <a href="https://cbec.acsell.ai/signin.">
                https://cbec.acsell.ai/signin.
              </a>
            </dd>
          </dl>
        </div>
      </div>
      <div className="card flex-row border-center">
        <div className="left left flex-column">
          <i className="cont cont_zik">
            <em className="hidden">zik</em>
          </i>
          <p className="title title_small_v1 flex_1 gridCenter textCenter">
            02/2023
            <br /> - <br />
            10/2022
          </p>
        </div>
        <div className="right flex-column lign-items-center gap20">
          <div className="flex-row align-items-center">
            <p className="left text text_point">ZIKPAY Inc.</p>
            <div className="right textRight">
              <p>South Korea</p>
              <p>Web Publisher (Junior)</p>
              <p>Secure Payment Solution Platform Service Inc.</p>
            </div>
          </div>
          <dl>
            <dt className="text_v4 text_point">Admin Site</dt>
            <dd className="text_v5">
              Responsible for developing admin pages using HTML, CSS,
              JavaScript, and jQuery, and working on publishing development with
              Thymeleaf. Conducted cross-browser testing on Windows and Mac,
              managed branches and code using Git, including GitLab, and
              contributed to the site launch of&nbsp;
              <a href="https://zikpay.com/">https://zikpay.com/.</a>
            </dd>
          </dl>
        </div>
      </div>
      <div className="card flex-row border-center">
        <div className="left left flex-column">
          <i className="cont cont_ezen">
            <em className="hidden">ezen</em>
          </i>
          <p className="title title_small_v1 flex_1 gridCenter textCenter">
            09/2022
            <br /> - <br />
            05/2022
          </p>
        </div>
        <div className="right flex-column lign-items-center gap20">
          <div className="flex-row align-items-center">
            <p className="left text text_point">EZEN Inc. </p>
            <div className="right textRight">
              <p>South Korea</p>
              <p>Web Publisher (Junior)</p>
              <p>SI Inc.</p>
            </div>
          </div>
          <dl>
            <dt className="text_v4 text_point">Admin Site</dt>
            <dd className="text_v5">
              Contributed to SI project development and performed publishing
              work for various project websites. Developed UIs using HTML, CSS,
              and JavaScript, ensuring adherence to web accessibility standards.
              Created responsive websites optimized for mobile and different OS
              environments. Managed and compiled SCSS files using Gulp and
              handled code management with SVN and Git.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Resume_detial;
