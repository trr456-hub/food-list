import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import AuthModal from "../components/AuthModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const auth = getAuth();

  const onChange = (e) => {
    //console.log(e.target.value);
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //로그인
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      //console.log(data);
      setError(error.message);
    }
  };

  const googlePopup = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  const setWindow = () => {
    setModal(true);
  };
  return (
    <div className="authContainer">
      <form onSubmit={onSubmit} className="container">
        <input
          name="email"
          type="text"
          placeholder="E-MAIL"
          required
          value={email}
          onChange={onChange}
          className="authInput"
        />
        <input
          name="password"
          type="password"
          placeholder="PASSWORD"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <input
          type="submit"
          className="authInput authSubmit"
          value="로그인🔑"
        />
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={setWindow} className="authSwitch">
        회원가입🔒
      </span>
      {modal && <AuthModal setModal={setModal} />}
      <div className="authBtns">
        <button className="authBtn" onClick={googlePopup}>
          GOOGLE 로그인
          <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
