// 전역으로 사용할 기본 스타일
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
  body{
    color: ${(props) => props.theme.defaultColor};
    background-color: ${(props) => props.theme.bgColor};
    line-height: 1.42857143;
    overflow-x: hidden;
    max-width: 100vw;
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
  }
body,
div,
p,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
blockquote,
table,
th,
td,
input,
select,
textarea,
blockquote,
address,
button {
  padding: 0;
  margin: 0; /*font-weight:$normal;*/
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%; /*font-weight:$bold;*/
}
fieldset,
img {
  border: 0 none;
}
ul,
ol,
li {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
input,
select,
textarea,
button {
  font-size: 100%;
  vertical-align: middle;
}
button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// body {background:#fff;-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:none;}
body,
th,
td,
input,
select,
textarea,
button {
  font-size: 15px;
  line-height: 1;
  font-family: $font-family; /*color:$base-color;*/
  word-break: break-word;
  letter-spacing: -0.05em;
}
a {
  color: #000;
  text-decoration: none;
}
a:active,
a:hover,
a:link,
a:visited {
  /*color:$base-color;*/
  text-decoration: none;
}
address,
caption,
cite,
code,
dfn,
em,
var {
  font-style: normal; /*font-weight:$normal;*/
}
img {
  vertical-align: top;
}
b,
strong {
  /*font-weight:$bold;*/
}
hr {
  display: none;
}
pre {
  word-break: break-word;
  white-space: pre-wrap;
  font-family: inherit;
}
caption {
  overflow: hidden;
  width: 0;
  height: 0;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
input[type="text"],
input[type="password"],
input[type="submit"],
input[type="search"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
  border-radius: 4px;
}
input[type="checkbox"]:checked {
  background-color: #666;
  -webkit-appearance: checkbox;
}
button,
input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"],
input[type="number"] {
  -webkit-appearance: button;
  border-radius: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
/* iPhone number color reset */
a[href^="tel"] {
  color: inherit;
  text-decoration: none;
}

// ::selection {
//   background: $point-color;
//   color: #fff;
// }
:root {
  --wp--preset--font-size--normal: 16px;
  --wp--preset--font-size--huge: 42px;
  font-size: 14px;
}
html {
  font-size: 62.5%;
}
input,
textarea {
  background: transparent;
  border: none;
  border-radius: 0px !important;
  &:focus {
    outline: none;
  }
}
select::-ms-expand {
  display: none;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 100%;
}
select:focus::-ms-value {
  background-color: transparent;
  color: #000;
}

input::-ms-clear {
  display: none;
}

/* WebKit browsers */
::-webkit-input-placeholder {
  /*color:$placeholder-color;*/
  -webkit-border-radius: 0;
}
/* Mozilla Firefox 4 to 18 */
:-moz-placeholder {
  /*color:$placeholder-color;*/
  opacity: 1;
}
/* Mozilla Firefox 19+ */
::-moz-placeholder {
  /*color:$placeholder-color;*/
  opacity: 1;
}
/* Internet Explorer 10+ */
:-ms-input-placeholder {
  /*color:$placeholder-color;*/
}

/* global */
.a11y {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  font-size: 1px;
  opacity: 0;
}
.blind {
  position: absolute;
  top: -9999px;
  width: 0;
  height: 0;
  font-size: 1%;
  line-height: 0;
}
/* 1줄 말줄임 */
.ellipsis {
  @include ellipsis;
}
.ellipsis2 {
  @include ellipsis2;
}

main {
  display: block;
}
figure {
  margin: 0;
}

.hidden {
  width: 1px;
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  position: absolute;
}

`;
