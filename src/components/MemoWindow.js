import React from "react";
import { useLocation } from "react-router-dom";

const MemoWindow = () => {
  const location = useLocation();
  const foods = location.state.foodContents;
  console.log(foods)
  return <div>memorizeWindow</div>;
};

export default MemoWindow;
