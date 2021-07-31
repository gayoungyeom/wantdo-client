import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { main, bg } from '../utils/color';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        color: ${main};
        background: ${bg}
    }
`;

export default GlobalStyles;
