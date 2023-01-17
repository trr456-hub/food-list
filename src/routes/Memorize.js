import React, { useEffect, useState } from "react";
import { Auth, dbService } from "fbase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";

const Memorize = ({ userObj }) => {
  const [foods, setFoods] = useState([]);
  /** 로그아웃 fnc */
  const navigate = useNavigate();
  const logoutClick = () => {
    Auth.signOut();
    navigate("/");
  };
  const getFoods = async () => {
    const q = query(collection(dbService, "foodList"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const foodObj = {
        ...doc.data(),
        id: doc.id,
      };
      setFoods((prev) => [foodObj, ...prev]);
    });
  };
  useEffect(() => {
    getFoods();
  }, []);
  // console.log(foods);
  // console.log(userObj);
  return (
    <div>
      <button onClick={logoutClick}>로그아웃</button>
      {foods.map((food) => (
        <div key={food.creatorId}>{food.foodData.gu.RCP_NM}</div>
      ))}
    </div>
  );
};

export default Memorize;
