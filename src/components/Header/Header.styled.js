// import styled from "styled-components";

// export const HeaderWrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 10vh;  

//   padding: 2rem;

//   .logo {
//     height: 4rem;
//     fill: ${(props) => props.theme.colors.text};
//   }
// `;

// chatgpts = styled.chatgpts
// import styled from 'styled-components';

// export const HeaderWrapper = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: ${({ theme }) => theme.background};
//   color: ${(props) => props.theme.colors.text};
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   .logo {
//     width: 50px;
//     height: 50px;
//     fill: ${(props) => props.theme.colors.text};
//   }

  /* .header-toggle {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; */

    /* &:hover {
      background-color: ${({ theme }) => theme.buttonHoverBackground};
    }
  
`; */


// Header.styled.js
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;  
  margin-top: 1rem;
  padding: 2rem;

  .logo {
    height: 4rem;
    margin-right: 18rem;
    fill: ${(props) => props.theme.colors.text};
  }

  .header-toggle{
    cursor: pointer;
    font-size: 2rem;
    /* border: 1px solid ${(props) => props.theme.colors.black}; */
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

