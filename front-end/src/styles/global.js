import { createGlobalStyle } from 'styled-components';

// import background from '../assets/images/background.svg';

export default createGlobalStyle`

   

   *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing: border-box;
      /* color: #fff; */
   }

   body{
      /* background: #0000008a; */
      -webkit-font-smoothing: antialiased;
   }

   body, input, button {
      font: 14px Roboto, sans-serif;
   }

   #root{
      /* max-width: 1020px;
      margin: 0 auto;
      padding: 0 20px 50px; */

      button{
         cursor: pointer;
      }

      a{
         text-decoration: none;
         color: blue;
      }
   }
`;
