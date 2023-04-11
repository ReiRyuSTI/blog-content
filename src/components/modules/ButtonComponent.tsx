import React from "react";
type ButtonColorProps = {
  text: string;
  color:
    | "primary-500"
    | "compaign"
    | "evident-gray"
    | "evident-orange"
    | "error-main";
  activeFlag: boolean;
  onClick?: () => void;
};
export const ButtonColor = (props: ButtonColorProps) => {
  const { text, color, onClick, activeFlag } = props;

  return (
    <>
      <button
        className={
          "inline-flex items-center justify-center font-bold text-white hover:opacity-80 " +
          (activeFlag ? `bg-${color}` : "bg-evident-gray") +
          " py-[13px] px-8 text-base"
        }
        onClick={onClick}
        disabled={!activeFlag}
      >
        {text}
      </button>
    </>
  );
};

type ButtonSkeletonProps = {
  text: string;
  activeFlag: boolean;
  onClick?: () => void;
  size: "Large" | "Medium";
};

export const ButtonSkeleton = (props: ButtonSkeletonProps) => {
  const { text, onClick, size, activeFlag } = props;

  return (
    <>
      <button
        className={
          "inline-flex items-center justify-center border border-evident-gray bg-white font-bold hover:text-gray " +
          (activeFlag ? " text-black" : " text-evident-gray") +
          (size == "Large"
            ? "  py-[12px] px-8 text-base"
            : " px-4 py-[6px] text-sm")
        }
        onClick={onClick}
        disabled={!activeFlag}
      >
        {text}
      </button>
    </>
  );
};
