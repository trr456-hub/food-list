import { useEffect, useState } from "react";
// import FoodList from "../components/FoodList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [foodNm, setFoodNm] = useState("");
  const getFoods = async () => {
    const json = await (
      await fetch(
        `http://openapi.foodsafetykorea.go.kr/api/5efa61cf6eb74a45b1a3/COOKRCP01/json/1/40`
      )
    ).json();
    setFoods(json.COOKRCP01.row);
    setLoading(false);
    //console.log(json.COOKRCP01.row);
  };
  // 음식 종류 추출 부분
  const foodKinds = foods.map((food) => {
    if (food.RCP_PAT2 === "반찬") {
      //console.log(food.RCP_PAT2)
      return (
        <div key={food.RCP_PAT2}>
          <div>{food.RCP_NM}</div>
          <img src={food.ATT_FILE_NO_MAIN} alt="imges" />
        </div>
      );
    }
  });
  console.log(foodKinds);

  const randomKinds = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    setFoodNm(rrr);
    console.log(rrr);
  };

  useEffect(() => {
    //console.log(getFoods());
    getFoods();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <span>로딩중...</span>
        </div>
      ) : (
        // React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다.
        // 리액트 라이브러리는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다.
        // 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
        <div>
          <div>
            <button onClick={randomKinds}>반찬추출</button>
            <div>{foodNm}</div>
          </div>
          <div>
            <button>일품추출</button>
          </div>
          <div>
            <button>간식추출</button>
          </div>
          <div>
            <button>국&찌개추출</button>
          </div>
          <div>
            <button>밥추출</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
