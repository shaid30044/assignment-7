import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Carts from "./Components/Carts";

function App() {
  const [selectCourse, setSelectCourse] = useState([]);

  const handleSelected = (card) => {
    console.log(card);
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
          <Carts></Carts>
        </div>
      </div>
    </div>
  );
}

export default App;
