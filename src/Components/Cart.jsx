import PropTypes from "prop-types";

const Cart = ({ card }) => {
  const { course_name } = card;

  return <li className="color-2 py-1">{course_name}</li>;
};

Cart.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Cart;
