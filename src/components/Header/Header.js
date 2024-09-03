import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")}/>
     
      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>

      {/* <button onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </button> */}

      
    </HeaderWrapper>
  );
}

export default Header;


// import React, { useContext } from 'react'
// import { ThemeContext } from '../../contexts/ThemeContext'

// // import { SfxContext } from '../../contexts/SfxContext';
// import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled'
// import { ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe.svg"
// import { useNavigate } from "react-router-dom";
 
// function Header () {


// const navigate = useNavigate();
// const { theme, toggleTheme } = useContext(ThemeContext);
// // const {hoverSfx, clickSfx} = useContext(SfxContext);

// return (
//     <HeaderWrapper>
//         <Logo className="logo" onClick={() => navigate("/")} />
//         <button onClick={() => toggleTheme()}>Toggle Theme
//           {/* {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />} */}
//         </button>
        
//     </HeaderWrapper>
//   )

// }

// export default Header

  
/* <HeaderWrapper>
<Logo className='logo' onClick={() => navigate('/')} onMouseEnter={() => hoverSfx()} />
<span
  onClick={() => {
    clickSfx();
    toggleTheme()
  }}
  onMouseEnter={() => hoverSfx()}>
  {theme === 'dark' ?
    <LightModeIcon /> :
    <DarkModeIcon />}
</span>
</HeaderWrapper>
);
} */

// 222222222222222222222222222222222222222222222222222222222



