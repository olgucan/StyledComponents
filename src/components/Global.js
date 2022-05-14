import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle `
   * {
       box-sizing:border-box;
   } 
   body {
       background:${(({theme})=>theme.colors.body)};
       color:hsl(192,100%,9%);
       font-family:'Roboto', 'sans-serif';
       font-size:1.15em;
   }
   p {
       opacity:.6;
       line-height:1.5;
   }
   img {
       max-width:100%;
   }
`
export default GlobalStyles