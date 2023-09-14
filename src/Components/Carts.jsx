import Cart from "./Cart";

const Carts = () => {
  return (
    <div className="bg-white rounded-xl p-4">
      <h3 className="text-lg font-bold color-4 border-b-2 pb-4">
        Credit Hour Remaining 7 hr
      </h3>
      <h3 className="text-xl font-bold color-1 pt-5">Course Name</h3>
      <Cart></Cart>
      <p className="font-medium color-2 border-y-2 py-4">
        Total Credit Hour : 13
      </p>
      <p className="font-semibold color-2 pt-4">Total Price : 48000 USD</p>
    </div>
  );
};

export default Carts;
