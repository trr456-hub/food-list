import React, { useEffect, useState } from "react";
import { Auth, dbService } from "fbase";
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Memorize = ({ userObj }) => {
  const [foods, setFoods] = useState([]);
  /** 로그아웃 fnc */
  const navigate = useNavigate();
  const logoutClick = () => {
    Auth.signOut();
    navigate("/");
  };
  // const foodArr = foods.filter((food) => food.creatorId === userObj.uid);
  // console.log(foodArr);
  useEffect(() => {
    const q = query(
      collection(dbService, "foodList"),
      orderBy("createAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const uID = userObj.uid;
      const foodArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFoods(foodArr.filter((food) => uID === food.creatorId));
      //console.log(foodArr.filter((food) => uID === food.creatorId));
    });
    onAuthStateChanged(Auth, (user) => {
      if (user === null) {
        unsubscribe();
      }
    });
  }, [userObj.uid]);
  // console.log(foods.filter((food) => console.log(food.creatorId)));
  // console.log(userObj.uid);
  return (
    <div>
      <button onClick={logoutClick}>로그아웃</button>
      {foods.map((food) => (
        <div key={food.id}>
          <Link to={`/memorize/${food.id}`} state={{ foodContents: food }}>
            {food.createAt}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Memorize;
