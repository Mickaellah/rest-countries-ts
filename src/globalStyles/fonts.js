import { css } from "styled-components";

import NunitoLightWoff from './fonts/NunitoSans-Light.woff';
import NunitoLightWoff2 from './fonts/NunitoSans-Light.woff2';
import NunitoSemiBoldWoff from './fonts/NunitoSans-SemiBold.woff';
import NunitoSemiBoldWoff2 from './fonts/NunitoSans-SemiBold.woff2';
import NunitoExtraBoldWoff from './fonts/NunitoSans-ExtraBold.woff';
import NunitoExtraBoldWoff2 from './fonts/NunitoSans-ExtraBold.woff2';

export const fonts = css`
    @font-face {
        font-family: "NunitoSans ExtraBold";
        src: url(${NunitoExtraBoldWoff2}) format('woff2),
            url(${NunitoExtraBoldWoff}) format('woff);
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: "NunitoSans SemiBold";
        src: url(${NunitoSemiBoldWoff2}) format('woff2),
            url(${NunitoSemiBoldWoff}) format('woff);
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "NunitoSans Light";
        src: url(${NunitoLightWoff2}) format('woff2),
            url(${NunitoLightWoff}) format('woff);
        font-weight: 300;
        font-style: normal;
    }

`;