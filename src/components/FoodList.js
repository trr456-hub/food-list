import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

function FoodList({
  id,
  name,
  recipe01,
  recipe02,
  recipe03,
  recipe04,
  recipe05,
  recipe06,
  recipe07,
  recipe08,
  recipe09,
  recipe10,
  recipe11,
  recipe12,
  recipe13,
  recipe14,
  recipe15,
  recipe16,
  recipe17,
  recipe18,
  recipe19,
  recipe20,
}) {
  return (
    <div>
      {name}
      {recipe01}
    </div>
  );
}

FoodList.propType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  recipe01: PropTypes.string.isRequired,
  recipe02: PropTypes.string.isRequired,
  recipe03: PropTypes.string.isRequired,
  recipe04: PropTypes.string.isRequired,
  recipe05: PropTypes.string.isRequired,
  recipe06: PropTypes.string.isRequired,
  recipe07: PropTypes.string.isRequired,
  recipe08: PropTypes.string.isRequired,
  recipe09: PropTypes.string.isRequired,
  recipe10: PropTypes.string.isRequired,
  recipe11: PropTypes.string.isRequired,
  recipe12: PropTypes.string.isRequired,
  recipe13: PropTypes.string.isRequired,
  recipe14: PropTypes.string.isRequired,
  recipe15: PropTypes.string.isRequired,
  recipe16: PropTypes.string.isRequired,
  recipe17: PropTypes.string.isRequired,
  recipe18: PropTypes.string.isRequired,
  recipe19: PropTypes.string.isRequired,
  recipe20: PropTypes.string.isRequired,
};

export default FoodList;
