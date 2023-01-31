import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import "../ModalStyle.css";

const AuthModal = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득

  const onChange = (e) => {
    // console.log(e.target.value);
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    //console.log(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      //회원가입
    } catch (error) {
      // 에러창 도출
      setError(error.message);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const modalRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      // mousedown 이 발생된 영역이 modal창 밖이면 모달창 제거 처리
      if (modalRef && !modalRef.current.contains(e.target)) {
        setModal(false);
      } else {
        setModal(true);
      }
    };
    // eventhandler 등록
    document.addEventListener("mousedown", handler);
    return () => {
      // eventhandler 해제
      document.removeEventListener("mousedown", handler);
    };
  }, [setModal]);

  return (
    <>
      <div ref={modalRef} className="authModal">
        <button className="authClose" onClick={closeModal}>
        ❌
        </button>
        <form onSubmit={onSubmit} className="modalForm">
          <input
            name="email"
            type="email"
            placeholder="Email.."
            required
            value={email}
            className="authInput"
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password.."
            required
            value={password}
            className="authInput"
            onChange={onChange}
          />
          <input
            type="submit"
            className="authInput authSubmit"
            value="회원가입🔒"
          />
          {error && <span className="authError">{error}</span>}
        </form>
      </div>
    </>
  );
};

export default AuthModal;
