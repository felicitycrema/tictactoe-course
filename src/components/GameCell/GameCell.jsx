import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWInner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/iconsqr-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/iconheart-o.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/iconheart-o-outlined.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/iconsqr-x-outlined.svg";
function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index);
    checkForWInner(game.board);
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedIcon" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedIcon" />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler} >
       {game.turn === "x" ? (
          <XIconOutline className="outlineIcon"/> 
       ):( 
       <OIconOutline className="outlineIcon"/>
      )} 
      {/* {cellItem} */}
    </CellStyle>
  );
}

export default GameCell;
