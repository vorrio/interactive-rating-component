import { useParams } from "react-router-dom";
import thankYouImg from "../images/illustration-thank-you.svg";

export default function ThankYou() {
  const { rating } = useParams();
  return (
    <div className="flex items-center flex-col bg-dark-blue max-w-[412px] rounded-3xl px-[24px] py-[32px] sm:px-[32px]">
      <img src={thankYouImg} alt="thank you image" />
      <p className="mt-[24px] text-orange bg-medium-grey rounded-full py-[8px] px-[16px] inline-block">
        You selected <span>{rating}</span> out of 5
      </p>
      <h1 className="mt-[24px] text-white text-2xl">Thank you!</h1>
      <p className="mt-[16px] text-light-grey text-base text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
