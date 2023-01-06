import { useEffect, useRef } from "react";

const FoodModal = ({ setModal, foodData }) => {
  //console.log(foodData);
  const closeModal = () => {
    setModal(false);
  };

  const modalRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (modalRef && !modalRef.current.contains(e.target)) {
        setModal(false);
      } else {
        setModal(true);
      }
    };
    // eventHandler 등록
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setModal]);
  // console.log(modalRef);
  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        ❌
      </button>
      <div ref={modalRef}>
        <img src={foodData.ATT_FILE_NO_MAIN} alt="imges" />
        <h2>{foodData.RCP_NM}</h2>
        <div>
          <div>
            <h2>영양정보</h2>
            <span>칼로리 : {foodData.INFO_ENG}</span>
            <span>탄수화물 : {foodData.INFO_CAR}</span>
            <span>단백질 : {foodData.INFO_PRO}</span>
            <span>지방 : {foodData.INFO_FAT}</span>
            <span>나트륨: {foodData.INFO_NA}</span>
          </div>
          <div>
            <h2>재료</h2>
            <div>{foodData.RCP_PARTS_DTLS}</div>
          </div>
          <div>
            <h2>조리방법</h2>
            <div>{foodData.MANUAL01}</div>
            <div>{foodData.MANUAL02}</div>
            <div>{foodData.MANUAL03}</div>
            <div>{foodData.MANUAL04}</div>
            <div>{foodData.MANUAL05}</div>
            <div>{foodData.MANUAL06}</div>
            <div>{foodData.MANUAL07}</div>
            <div>{foodData.MANUAL08}</div>
            <div>{foodData.MANUAL09}</div>
            <div>{foodData.MANUAL10}</div>
            <div>{foodData.MANUAL11}</div>
            <div>{foodData.MANUAL12}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
