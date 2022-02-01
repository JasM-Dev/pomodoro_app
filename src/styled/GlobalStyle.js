import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color_blue_gray: rgb(215, 224, 255);
    --color_light_gray:rgb(239, 241, 250);
    --color_dark_blue: rgb(30, 33, 63);
    --color_blue_black: rgb(22, 25, 50);
    --color_white: #ffffff;
    --font_xxl: 100px;
    --font_xl: 28px;
    --font_lg:16px;
    --font_md: 14px;
    --font_sm: 13px;
    --font_xs: 12px;
}
* {
    box-sizing: border-box;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
}
html{
    font-size: 10px;
}
body{
    font-weight: 700;
    background-color: var(--color_dark_blue);
    font-family: ${props => props.themeFont}
}
input[type=number] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
button,
input{
cursor: pointer;
}
.site_title{
    margin-top: 32px;
    font-size: 24px;
    color: var(--color_blue_gray);
    text-align: center;
    @media(min-width: 760px){
        font-size: 32px;
    }
}


`;
