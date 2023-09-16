import Cart from "./Cart";
import PropTypes from "prop-types";

const Carts = ({ selectedCourse, totalCredit, remaining, totalPrice }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <h3 className="text-lg font-bold color-4 border-b-2 pb-4">
        Credit Hour Remaining {remaining} hr
      </h3>
      <h3 className="text-xl font-bold color-1 pt-5 pb-6">Course Name</h3>
      <ul className="list-decimal px-5">
        {selectedCourse.map((card, idx) => (
          <Cart key={idx} card={card}></Cart>
        ))}
      </ul>
      <p className="font-medium color-2 border-y-2 py-4 mt-6">
        Total Credit Hour : {totalCredit}
      </p>
      <p className="font-semibold color-2 pt-4">Total Price : ${totalPrice}</p>
    </div>
  );
};

Carts.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Carts;
