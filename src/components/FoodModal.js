const FoodModal = ({ setModal, setData }) => {
  console.log(setData.props.children[0].props.children);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        ❌
      </button>
      <div>{setData.props.children[0].props.children}</div>
    </div>
  );
};

export default FoodModal;
