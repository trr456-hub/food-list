const FoodModal = ({ setModal, setData }) => {
  console.log(setData);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        ❌
      </button>
      <div></div>
    </div>
  );
};

export default FoodModal;
