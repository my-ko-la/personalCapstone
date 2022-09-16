import { useState } from "react";

const QuoteReview = () => {
  const [quote, setQuote] = useState<number | null>(null);

  return (
    <section className="hidden md:flex md:h-[480px] md:w-full bg-white md:flex-row justify-center items-center font-poppins">
      <div className="bg-gray-100 h-80 grid grid-col-7 grid-row-5 px-10 py-8 w-[85%]">
        <div className="row-start-3 row-end-5 col-start-3 col-end-7 text-xs relative">
          <p className="w-4/5 text-lg pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            nostrum, nobis sint animi necessitatibus, aliquid impedit vel nihil
            nisi quidem saepe! Saepe magni quia non sunt quibusdam obcaecati!
            Maiores, aliquid.
          </p>
          <p className="text-md absolute left-auto">- Tama Brown</p>
        </div>
        <button className="text-blue-600 border-2 border-blue-600 rounded-2xl h-6 ml-8 text-xs px-4 row-start-5 row-end-5 col-start-2 col-end-4">
          Leave Us A Review
        </button>
      </div>
    </section>
  );
};

export default QuoteReview;
