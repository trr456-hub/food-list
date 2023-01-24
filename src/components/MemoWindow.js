import React, { useState } from "react";
import MWindowModal from "./MWindowModal";
import { useLocation } from "react-router-dom";
import "../ModalStyle.css";

const MemoWindow = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const foods = location.state.foodContents.foodData;
  let foodsArr = Object.keys(foods);
  let foodsMaping = foodsArr.map((item) => foods[item]);
  const showModal = () => {
    setModal(true);
  };
  // console.log(foodsMaping);
  return (
    <div>
      {foodsMaping.map((item) => (
        <div key={item.RCP_SEQ} onClick={showModal}>
          <div>{item.RCP_NM}</div>
          <img src={item.ATT_FILE_NO_MAIN} alt="mImg" />
        </div>
      ))}
      {modal && <MWindowModal setModal={setModal} />}
    </div>
  );
};

export default MemoWindow;
