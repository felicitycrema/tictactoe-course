import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWInner } from "../../utils/GameUtils";
function GameCell({ cellItem, index }) {
  const  { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index)
    checkForWInner(game.board)
   
    
    // if(result) {
    // updateBoard(index)
    // }
  }
  return (
    <CellStyle
      onClick={cellClickHandler}
    >
      {cellItem}
    </CellStyle>
  );
}

export default GameCell;
