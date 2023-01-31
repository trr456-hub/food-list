const MemoWinModal = ({ setModal, modalData }) => {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="modalContainer">
      <button type="button" className="close" onClick={closeModal}>
        ❌
      </button>
      <div>
        <img
          src={modalData.ATT_FILE_NO_MAIN}
          alt="imges"
          className="modalImg"
        />
        <h2 className="foodMName">{modalData.RCP_NM}</h2>
        <div>
          <div className="foodNutrition">
            <h2 style={{ fontSize: "20px" }}>영양정보</h2>
            <span>(칼로리:{modalData.INFO_ENG}),</span>
            <span>(탄수화물:{modalData.INFO_CAR}), </span>
            <span>(단백질:{modalData.INFO_PRO}), </span>
            <span>(지방:{modalData.INFO_FAT}), </span>
            <span>(나트륨:{modalData.INFO_NA} )</span>
          </div>
          <div className="foodIngredients">
            <h2 style={{ fontSize: "20px" }}>재료</h2>
            <div>{modalData.RCP_PARTS_DTLS}</div>
          </div>
          <div className="foodRecipes">
            <h2 style={{ fontSize: "20px" }}>조리방법</h2>
            <div>{modalData.MANUAL01}</div>
            <div>{modalData.MANUAL02}</div>
            <div>{modalData.MANUAL03}</div>
            <div>{modalData.MANUAL04}</div>
            <div>{modalData.MANUAL05}</div>
            <div>{modalData.MANUAL06}</div>
            <div>{modalData.MANUAL07}</div>
            <div>{modalData.MANUAL08}</div>
            <div>{modalData.MANUAL09}</div>
            <div>{modalData.MANUAL10}</div>
            <div>{modalData.MANUAL11}</div>
            <div>{modalData.MANUAL12}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoWinModal;
