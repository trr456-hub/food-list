import React, { useEffect, useState } from "react";
import AppRouter from "../components/Router";
import { Auth } from "../fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [state, setState] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setState(true);
        setUserObj(user);
      } else {
        setState(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>{init ? <AppRouter state={state} userObj={userObj} /> : "초기화 중..."}</>
  );
};

export default App;
