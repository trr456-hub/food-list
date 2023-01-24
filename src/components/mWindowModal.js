const mWindowModal = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="container">
      <button type="button" className="close" onClick={closeModal}>
        ❌
      </button>
      모달창.
    </div>
  );
};

export default mWindowModal;
