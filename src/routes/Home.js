import { useEffect, useState } from "react";
import FoodList from "../components/FoodList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    const json = await (
      await fetch(
        `http://openapi.foodsafetykorea.go.kr/api/5efa61cf6eb74a45b1a3/COOKRCP01/json/1/5`
      )
    ).json();
    setFoods(json.COOKRCP01.row);
    setLoading(false);
    console.log(json.COOKRCP01.row);
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
        // React는 key prop을 사용하여 컴포넌트와 DOM 요소 간의 관계를 생성한다.
        // 리액트 라이브러리는 이 관계를 이용해 컴포넌트 리렌더링 여부를 결정한다.
        // 불필요한 리렌더링을 방지하기 위해서는 각 자식 컴포넌트마다 독립적인 key값을 넣어줘야 한다.
        <div>
          <button>반찬추출</button>
          <button>반찬추출</button>
          <button>반찬추출</button>
          <button>밥추출</button>
          <button>국추출</button>
          {foods.map((food) => (
            <FoodList
              key={food.RCP_SEQ}
              id={food.RCP_SEQ}
              name={food.RCP_NM}
              recipe01={food.MANUAL01}
              recipe02={food.MANUAL02}
              recipe03={food.MANUAL03}
              recipe04={food.MANUAL04}
              recipe05={food.MANUAL05}
              recipe06={food.MANUAL06}
              recipe07={food.MANUAL07}
              recipe08={food.MANUAL08}
              recipe09={food.MANUAL09}
              recipe10={food.MANUAL10}
              recipe11={food.MANUAL11}
              recipe12={food.MANUAL12}
              recipe13={food.MANUAL13}
              recipe14={food.MANUAL14}
              recipe15={food.MANUAL15}
              recipe16={food.MANUAL16}
              recipe17={food.MANUAL17}
              recipe18={food.MANUAL18}
              recipe19={food.MANUAL19}
              recipe20={food.MANUAL20}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
