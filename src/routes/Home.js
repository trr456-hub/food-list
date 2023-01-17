import { useEffect, useState } from "react";
// import FoodList from "../components/FoodList";
import FoodModal from "../components/FoodModal";
import "../ModalStyle.css";
import { dbService } from "fbase";
import { collection, addDoc } from "firebase/firestore";

const Home = ({ userObj }) => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [ban, setBan] = useState("");
  const [ilp, setIlp] = useState("");
  const [desser, setDesser] = useState("");
  const [gu, setGu] = useState("");
  const [ric, setRic] = useState("");
  const [modal, setModal] = useState(false);
  // const [data, setData] = useState({});
  const [foodData, setfoodData] = useState({
    ban: null,
    ilp: null,
    desser: null,
    gu: null,
    ric: null,
  });
  const getFoods = async () => {
    const json = await (
      await fetch(
        `http://openapi.foodsafetykorea.go.kr/api/5efa61cf6eb74a45b1a3/COOKRCP01/json/1/1000`
      )
    ).json();
    setFoods(json.COOKRCP01.row);
    setLoading(false);
    //console.log(json.COOKRCP01.row);
  };

  // 음식 종류 추출 부분
  const foodKinds = (food) => (
    <div key={food.RCP_PAT2}>
      <div>{food.RCP_NM}</div>
      <img src={food.ATT_FILE_NO_MAIN} alt="imges" />
    </div>
  );
  // console.log(foodKinds);

  // State 의 변화 => 렌더링 => 컴포넌트 내부 변수들 초기화
  // Ref 의 변화 => NO렌더링 => 변수들의 값이 유지됨
  // State 의 변화 => 렌더링 => 그래도 Ref의 값은 유지됨
  const keyToKorean = {
    ban: "반찬",
    ilp: "일품",
    desser: "후식",
    gu: "국&찌개",
    ric: "밥",
  };
  /** array의 길이만큼에 숫자 중에서 랜덤으로 숫자 하나를 뽑는 함수 */
  const randomNum = (arr) => Math.floor(Math.random() * arr.length);
  /** state 중에서 setter 들만 모아놓은 object */
  const setters = {
    ban: setBan,
    ilp: setIlp,
    desser: setDesser,
    gu: setGu,
    ric: setRic,
  };
  /** state 중에서 getter 들만 모아놓은 object */
  const getters = {
    ban: ban,
    ilp: ilp,
    desser: desser,
    gu: gu,
    ric: ric,
  };
  /** 우리가 사용하는 음식종류들 ex: ["반찬","일품"...] */
  const kinds = Object.keys(setters);

  /** 버튼을 눌렀을때 kinds가 같은것들 로만 추출 */
  const showRdmFoods = (kind) => {
    //console.log(foods.filter((food) => food.RCP_PAT2 === "반찬"));
    const foodsArr = foods.filter(
      (food) => food.RCP_PAT2 === keyToKorean[kind]
    );
    const randomFood = foodsArr[randomNum(foodsArr)];
    const foodComp = foodKinds(randomFood);
    setters[kind](foodComp);
    setfoodData({ ...foodData, [kind]: randomFood });
    // foodData 원본 키값들을 변수처리화 한다.
  };
  useEffect(() => {
    //console.log(getFoods());
    getFoods();
  }, []);
  // modal 구현 탭

  /** kinds 의 길이만큼 돌면서 음식종류별 버튼을 return하는 함수 */
  const kindBtns = kinds.map((kind, i) => (
    <div key={i}>
      <button onClick={() => showRdmFoods(kind)}>
        {keyToKorean[kind]}추출
      </button>
      <div onClick={() => setModal(kind)}>{getters[kind]}</div>
    </div>
  ));
  // form 부분
  const onSubmit = async () => {
    try {
      const docRef = await addDoc(collection(dbService, "foodList"), {
        createAt: Date.now(),
        creatorId: userObj.uid,
        foodData,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("에러내용: ", error);
    }
  };
  // console.log(userObj);
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
          {/* <form onSubmit={onSubmit}> */}
          {kindBtns}
          {modal && (
            <FoodModal
              modalState={modal}
              setModal={setModal}
              foodData={foodData}
            />
          )}
          <button onClick={onSubmit}>전체기록</button>
          {/* </form> */}
        </div>
      )}
    </div>
  );
};

export default Home;
