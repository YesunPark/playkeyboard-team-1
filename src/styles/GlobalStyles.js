import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'); 


  ${reset} 

    *{
        box-sizing: border-box;
    }
    body{
      font-family: 'Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic', sans-serif;
      //글씨체 에러 대비해서 여러개 두기?
      font-weight: 400;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

`;

export default GlobalStyles;
