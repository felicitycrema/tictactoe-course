import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled'
import { ReactComponent as Logo} from "../../assets/svgs/tic-tac-toe.svg"
import { useNavigate } from "react-router-dom";
function Header () {
      const { toggleTheme} = useContext(ThemeContext);
      const navigate = useNavigate();

  return (
    <HeaderWrapper>
        <Logo className="logo" onClick={() => navigate("/")} />
        <button onClick={() => toggleTheme()}>Toggle Theme
          {/* {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />} */}
        </button>
        
    </HeaderWrapper>
  )
}

export default Header