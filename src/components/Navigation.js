import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faHouse } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => (
  <nav className="nav">
    <ul className="navUl">
      <li className="homeLi">
        <Link to="/" className="homeA">
          <FontAwesomeIcon
            icon={faHouse}
            color={"#f5f7ad"}
            size="2x"
            style={{ paddingBottom: 5 }}
          />
          HOME
        </Link>
      </li>
      <li className="memLi">
        <Link to="/memorize" className="memA">
          <FontAwesomeIcon
            icon={faFloppyDisk}
            color={"#f5f7ad"}
            size="2x"
            style={{ paddingBottom: 5 }}
          />
          MEMORIZE
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
