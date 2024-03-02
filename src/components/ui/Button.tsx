import React from "react";
interface Props {
  children: React.ReactNode;
  style: string;
}
const Button = ({ children, style }: Props) => {
  return (
    <button
      type="submit"
      className={`uppercase px-4 py-2 mb-5 text-center text-[6px] mt-4  text-gray-200 rounded-sm  ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;

/*
  <button
        type="submit"
        className="uppercase px-4 py-2 mb-5 text-center w-full mt-4 bg-[#52c5b2] text-gray-300 rounded-sm"
      >
        Purchase 3.700 SEK
      </button>
*/
