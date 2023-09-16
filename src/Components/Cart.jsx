const Cart = ({ card }) => {
  const { course_name } = card;

  return (
    <div className="color-2 space-y-2 py-6">
      <li>{course_name}</li>
    </div>
  );
};

export default Cart;
