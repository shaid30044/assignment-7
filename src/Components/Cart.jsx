const Cart = ({ card }) => {
  const { course_name } = card;

  return <li className="color-2 py-1">{course_name}</li>;
};

export default Cart;
