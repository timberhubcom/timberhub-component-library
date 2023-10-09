import { injectGlobal } from '@emotion/css';

injectGlobal`
  html,
  body {
    @font-face {
      font-family: "GT Super Text";
      src: local("GT Super Text"), url("./assets/fonts/GT-Super/GT-Super-Text-Medium.woff2") format("woff2"),
      url("./assets/fonts/GT-Super/GT-Super-Text-Medium.ttf") format("truetype");
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "Inter-old";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url("./assets/fonts/Inter/Inter-Regular.ttf") format("truetype");
    }

    @font-face {
      font-family: "Inter-old";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url("./assets/fonts/Inter/Inter-Medium.ttf") format("truetype");
    }

    /* inter-regular - latin */
    @font-face {
      font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      src: url("./assets/fonts/Inter-v12-latin/inter-v12-latin-regular.woff2") format("woff2"),
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      url("./assets/fonts/Inter-v12-latin/inter-v12-latin-regular.ttf") format("truetype"); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
    }
    /* inter-500 - latin */
    @font-face {
      font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      src: url("./assets/fonts/Inter-v12-latin/inter-v12-latin-500.woff2") format("woff2"),
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */ url("./assets/fonts/Inter-v12-latin/inter-v12-latin-500.ttf")
      format("truetype"); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
    }
  }
`;
