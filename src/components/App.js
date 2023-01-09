import React, { useState } from "react";
import Routers from "./Router";
import { Auth } from "../fbase";

const App = () => {
  //console.log(Auth.currentUser);
  const [login, setLogin] = useState(Auth.currentUser);
  return <Routers login={login} />;
};

export default App;
