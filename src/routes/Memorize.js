import React from "react";
import { Auth } from "fbase";
import { useNavigate } from "react-router-dom";

const Memorize = () => {
  /** 로그아웃 fnc */
  const navigate = useNavigate();
  const logoutClick = () => {
    Auth.signOut();
    navigate("/");
  };
  return (
    <div>
      메모라이즈
      <button onClick={logoutClick}>로그아웃</button>
    </div>
  );
};

export default Memorize;
