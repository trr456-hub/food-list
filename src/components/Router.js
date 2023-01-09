import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const Routers = (login) => {
  // 로그인의 결과를 판단하는 state
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //useState 는 route 와 동떨어져 있기때문에 App.js로 옮겨준다. (prop사용)
  return (
    <Router>
      <Routes>
        {login ? (
          <Route path="/" element={<Auth />} />
          ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
};

export default Routers;
