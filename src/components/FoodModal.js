const FoodModal = ({ modalState, setModal, foodData }) => {
  // console.log(modalState);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="modalContainer">
      <button className="close" onClick={closeModal}>
        ❌
      </button>
      <div>
        <img
          src={foodData[modalState].ATT_FILE_NO_MAIN}
          alt="imges"
          className="modalImg"
        />
        <h2 className="foodMName">{foodData[modalState].RCP_NM}</h2>
        <div>
          <div className="foodNutrition">
            <h2 style={{fontSize:"20px"}}>영양정보</h2>
            <span>(칼로리:{foodData[modalState].INFO_ENG}),</span>
            <span>(탄수화물:{foodData[modalState].INFO_CAR}), </span>
            <span>(단백질:{foodData[modalState].INFO_PRO}), </span>
            <span>(지방:{foodData[modalState].INFO_FAT}), </span>
            <span>(나트륨:{foodData[modalState].INFO_NA} )</span>
          </div>
          <div className="foodIngredients">
            <h2 style={{fontSize:"20px"}}>재료</h2>
            <div>{foodData[modalState].RCP_PARTS_DTLS}</div>
          </div>
          <div className="foodRecipes">
            <h2 style={{fontSize:"20px"}}>조리방법</h2>
            <div>{foodData[modalState].MANUAL01}</div>
            <div>{foodData[modalState].MANUAL02}</div>
            <div>{foodData[modalState].MANUAL03}</div>
            <div>{foodData[modalState].MANUAL04}</div>
            <div>{foodData[modalState].MANUAL05}</div>
            <div>{foodData[modalState].MANUAL06}</div>
            <div>{foodData[modalState].MANUAL07}</div>
            <div>{foodData[modalState].MANUAL08}</div>
            <div>{foodData[modalState].MANUAL09}</div>
            <div>{foodData[modalState].MANUAL10}</div>
            <div>{foodData[modalState].MANUAL11}</div>
            <div>{foodData[modalState].MANUAL12}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
