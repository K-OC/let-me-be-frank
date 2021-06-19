import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    --bun: #ecb346;
    --meat: #b23232;
    --relish: #b8ff65;
    --darkbrown: #2f0000;
    --header-font: "Mandali";
    --mustard: ffdb58;

}

html, body {
    margin: 0;
    height: 100vh
}`;
