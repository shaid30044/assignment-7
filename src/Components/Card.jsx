const Card = ({ card, handleSelect }) => {
  const { id, img, course_name, course_description, price, credit } = card;

  return (
    <div className="bg-white rounded-xl p-4">
      <img
        className="rounded-xl w-full h-44 md:h-60 lg:h-44"
        src={img}
        alt=""
      />
      <h1 className="text-lg font-semibold color-1 pt-4 pb-3">{course_name}</h1>
      <p className="text-sm color-3">{course_description}</p>
      <div className="flex justify-between items-center font-medium color-3 pt-4 pb-6">
        <div>
          <p>Price : ${price}</p>
        </div>
        <div>
          <p>Credit : {credit}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleSelect(card)}
        className="btn btn-ghost bg-[#2F80ED] hover:bg-[#2470d3] normal-case text-lg font-semibold text-white w-full"
      >
        Select
      </button>
    </div>
  );
};

export default Card;
