import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import Details from "./Pages/Details/Details";
import Header from "./components/Header/Header";
// import { ModalContext } from "./contexts/ModalContext";

// export const Test = ({ handleModal }) => {
//   return (
//     <div>
//       TEST{" "}
//       <button onClick={() => handleModal(<Modal handleModal={handleModal} />)}>
//         show Modal
//       </button>
//     </div>
//   );
// };
// export const Modal = ({ handleModal }) => {
//   return <div>cnjcnjncdm</div>;
// };
function Router() {
  // const { handleModal } = useContext(ModalContext);
  
  return (
    <BrowserRouter>
      {/* <Test handleModal={handleModal} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
