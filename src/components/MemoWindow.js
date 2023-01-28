import React, { useState } from "react";
import MemoWinModal from "./MemoWinModal";
import { useLocation } from "react-router-dom";
import "../ModalStyle.css";

const MemoWindow = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const location = useLocation();
  const foods = location.state.foodContents.foodData;
  // console.log(foods)
  let foodsArr = Object.keys(foods);
  let foodsMaping = foodsArr.map((item) => foods[item]);

  const foodClick = (data) => {
    setModal(true);
    setModalData(data);
    console.log(data);
  };
  // console.log(foodsMaping);
  return (
    <div>
      {foodsMaping.map((item) => (
        <div key={item.RCP_SEQ} onClick={() => foodClick(item)}>
          <div>{item.RCP_NM}</div>
          <img src={item.ATT_FILE_NO_MAIN} alt="mImg" />
        </div>
      ))}
      {modal && <MemoWinModal setModal={setModal} modalData={modalData} />}
    </div>
  );
};

export default MemoWindow;
