import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    const res = await fetch(
      `http://openapi.foodsafetykorea.go.kr/api/5efa61cf6eb74a45b1a3/COOKRCP01/json/1/30`
    ).then((res) => res.json());
    setLoading(false);
    console.log(res);
  };
  useEffect(() => {
    //console.log(getFoods());
    getFoods();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <span>로딩중입니다^^</span>
        </div>
      ) : (
        <div>안녕하세요</div>
      )}
    </div>
  );
};

export default Home;
