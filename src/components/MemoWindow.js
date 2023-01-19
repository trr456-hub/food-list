import React from "react";
import { useLocation } from "react-router-dom";

const MemoWindow = () => {
  const location = useLocation();
  const foods = location.state.foodContents.foodData;
  let foodsArr = Object.keys(foods);
  let foodsMaping = foodsArr.map((item) => foods[item]);
  console.log(foodsMaping);
  return (
    <div>
      {foodsMaping.map((item) => (
        <div key={item.RCP_SEQ}>
          <div>{item.RCP_NM}</div>
          <img src={item.ATT_FILE_NO_MAIN} />
        </div>
      ))}
    </div>
  );
};

export default MemoWindow;
