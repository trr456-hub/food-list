import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">홈으로</Link>
      </li>
      <li>
        <Link to="/memorize">기록실</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
