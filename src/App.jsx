import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Carts from "./Components/Carts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelected = (card, id) => {
    const isExist = selectedCourse.find((item) => item.id == id);

    let credit = card.credit;

    if (isExist) {
      return toast.error("Course is already taken!");
    } else {
      selectedCourse.forEach((item) => {
        credit += item.credit;
      });

      const totalRemaining = 20 - credit;

      if (credit > 20) {
        return toast.error("Credit hour limit exceeded!");
      }

      setRemaining(totalRemaining);

      setTotalPrice(totalPrice + card.price);

      setTotalCredit(credit);

      setSelectedCourse([...selectedCourse, card]);

      if (totalRemaining === 0) {
        return toast.warning("Remaining credit hour is 0!");
      }
    }
  };

  return (
    <div className="font-inter px-10 lg:px-20 py-10 bg-[#F3F3F3]">
      <h1 className="text-3xl font-bold color-1 text-center pb-8">
        Course Registration
      </h1>
      <div className="md:flex gap-6">
        <div className="md:w-2/3 lg:w-3/4">
          <Cards handleSelected={handleSelected}></Cards>
        </div>
        <div className="md:w-1/3 lg:w-1/4 pt-10 md:pt-0">
          <Carts
            selectedCourse={selectedCourse}
            totalCredit={totalCredit}
            remaining={remaining}
            totalPrice={totalPrice}
          ></Carts>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
