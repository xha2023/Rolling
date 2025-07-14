import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset (가장 기본적인 리셋) */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * { /* 모든 요소에 box-sizing: border-box 적용 */
    box-sizing: border-box;
  }

  /* 전역 기본 스타일 */
  body {
    font-family: ${({ theme }) => theme.fonts.body}; /* Pretendard 폰트 적용 */
    font-size: ${({ theme }) => theme.fontSizes.md}; /* 기본 폰트 크기 (16px) */
    background-color: ${({ theme }) => theme.colors.white}; /* 기본 배경색 */
    color: ${({ theme }) => theme.colors.black};

    /* 폰트 렌더링 최적화 (선택 사항) */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 링크 스타일 */
  a {
    color: inherit; /* 부모 요소의 텍스트 색상 상속 */
    text-decoration: none; /* 밑줄 제거 */
    cursor: pointer;
  }

  /* 제목 태그 기본 스타일 */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold}; /* 제목 기본 굵기 */
    margin-bottom: ${({ theme }) => theme.fontSizes.md}; /* 아래 여백 (예시) */
  }

  /* 버튼 및 폼 요소의 폰트 상속 */
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
