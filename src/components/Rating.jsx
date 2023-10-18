import { useState } from "react";
import { Link } from "react-router-dom";
import starIcon from "../images/icon-star.svg";

export default function Rating() {
  const [chosenScore, setChosenScore] = useState(null);
  const handleChooseScore = (score) => {
    setChosenScore(score);
  };
  return (
    <div className="bg-dark-blue max-w-[412px] rounded-3xl px-[24px] py-[32px] sm:px-[32px]">
      <div className="grid place-content-center w-[48px] h-[48px] rounded-full bg-medium-grey">
        <img className="" src={starIcon} alt="star icon" />
      </div>
      <h1 className="mt-[24px] text-white text-2xl">How did we do?</h1>
      <p className="mt-[16px] text-light-grey text-base">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mt-[28px] flex justify-between">
        {["1", "2", "3", "4", "5"].map((item, index) => (
          <button
            key={index}
            className={`grid place-content-center w-[48px] h-[48px] rounded-full font-bold hover:bg-orange hover:text-white 
												${
                          chosenScore === item
                            ? "bg-light-grey text-white"
                            : "bg-medium-grey text-light-grey"
                        }`}
            onClick={() => handleChooseScore(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {chosenScore !== null ? (
        <Link to={`/thank-you/${chosenScore}`}>
          <button
            className="mt-[24px] sm:mt-[32px] block text-center text-white uppercase
				 bg-orange w-full rounded-full text-base p-[12px] tracking-widest
				 hover:bg-white hover:text-orange"
          >
            Submit
          </button>
        </Link>
      ) : (
        <button
          className="mt-[24px] sm:mt-[32px] block text-center text-white uppercase
				 bg-orange w-full rounded-full text-base p-[12px] tracking-widest
				 hover:bg-white hover:text-orange"
        >
          Submit
        </button>
      )}
    </div>
  );
}
