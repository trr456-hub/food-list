import { useEffect, useState } from "react";
// import FoodList from "../components/FoodList";
import FoodModal from "../components/FoodModal";
import "../ModalStyle.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [ban, setBan] = useState("");
  const [lip, setLip] = useState("");
  const [desser, setDesser] = useState("");
  const [gu, setGu] = useState("");
  const [ric, setRic] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const getFoods = async () => {
    const json = await (
      await fetch(
        `http://openapi.foodsafetykorea.go.kr/api/5efa61cf6eb74a45b1a3/COOKRCP01/json/1/300`
      )
    ).json();
    setFoods(json.COOKRCP01.row);
    setLoading(false);
    //console.log(json.COOKRCP01.row);
  };

  // 음식 종류 추출 부분
  const foodKinds = foods.map((food) => (
    <div key={food.RCP_PAT2}>
      <div>{food.RCP_NM}</div>
      <img src={food.ATT_FILE_NO_MAIN} alt="imges" />
    </div>
  ));
  //console.log(foodKinds);

  // State 의 변화 => 렌더링 => 컴포넌트 내부 변수들 초기화
  // Ref 의 변화 => NO렌더링 => 변수들의 값이 유지됨
  // State 의 변화 => 렌더링 => 그래도 Ref의 값은 유지됨

  const banchan = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    if (rrr.key === "반찬") {
      setBan(rrr);
      setData(rrr);
    }
    //console.log(rrr);
  };
  const lipum = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    if (rrr.key === "일품") {
      setLip(rrr);
    }
    // console.log(rrr);
  };
  const dessert = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    if (rrr.key === "후식") {
      setDesser(rrr);
    }
    // console.log(rrr);
  };
  const guk = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    if (rrr.key === "국&찌개") {
      setGu(rrr);
    }
    // console.log(rrr);
  };
  const rice = () => {
    const rrr = foodKinds[Math.floor(Math.random() * foodKinds.length)];
    if (rrr.key === "밥") {
      setRic(rrr);
    }
    // console.log(rrr);
  };

  useEffect(() => {
    //console.log(getFoods());
    getFoods();
  }, []);

  // modal 구현 탭
  const setWindow = () => {
    setModal(true);
  };
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
            <button onClick={banchan}>반찬추출</button>
            <div onClick={setWindow}>{ban}</div>
            {modal && <FoodModal setModal={setModal} setData={data} />}
          </div>
          <div>
            <button onClick={lipum}>일품추출</button>
            <div>{lip}</div>
          </div>
          <div>
            <button onClick={dessert}>간식추출</button>
            <div>{desser}</div>
          </div>
          <div>
            <button onClick={guk}>국&찌개추출</button>
            <div>{gu}</div>
          </div>
          <div>
            <button onClick={rice}>밥추출</button>
            <div>{ric}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
