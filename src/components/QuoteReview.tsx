import { useState } from "react";

const QuoteReview = () => {
  const [quote, setQuote] = useState<number | null>(null);

  return (
    <section className="h-[480px] w-full bg-white flex flex-row justify-center items-center font-poppins">
      <div className="bg-gray-100 h-80 grid grid-col-7 grid-row-5 px-10 py-8">
        <p className="text-4xl font-bold col-span-1 italic">"</p>
        <div className="col-span-6 row-span-4 text-xs">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            nostrum, nobis sint animi necessitatibus, aliquid impedit vel nihil
            nisi quidem saepe! Saepe magni quia non sunt quibusdam obcaecati!
            Maiores, aliquid.
          </p>
          <p>- Tama Brown</p>
        </div>
        <button className="text-blue-600 border-2 border-blue-600 rounded-2xl text-sm px-5 col-span-2 row-span-1">
          Leave Us A Review
        </button>
        <div className="col-start-6 col-end-7 row-span-1">
          <input
            className="appearance-none checked:to-blue-600 bg-blue-200 h-2 w-2 rounded-full"
            type="radio"
            name=""
            id=""
          />
          <input
            className="appearance-none checked:to-blue-600 "
            type="radio"
            name=""
            id=""
          />
          <input
            className="appearance-none checked:to-blue-600 "
            type="radio"
            name=""
            id=""
          />
          <input
            className="appearance-none checked:to-blue-600 "
            type="radio"
            name=""
            id=""
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteReview;
