
import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
:root{
    --color_blue_gray:#D7E0FF;
    --color_light_gray:#EFF1FA; 
    --color_dark_blue:#1E213F;
    --color_blue_black: #161932;
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
.site_title{
    margin-top: 32px;
    font-size: 24px;
    color: var(--color_blue_gray);
    text-align: center;
}

`;