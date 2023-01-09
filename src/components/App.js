import React, { useState } from "react";
import Routers from "./Router";
import { Auth } from "../fbase";

const App = () => {
  console.log(Auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.currentUser);
  return <Routers isLoggedIn={isLoggedIn} />;
};

export default App;
