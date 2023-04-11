import React from "react";

type Props = {
  text: string;
  onClick: () => void;
  selected: boolean;
};

export const MenuContent = (props: Props) => {
  const { text, onClick, selected } = props;
  return (
    <>
      <div
        onClick={onClick}
        className={
          " border-b border-evident-gray bg-white py-4 px-6 text-base font-bold hover:cursor-pointer hover:bg-[#F7F7F7]" +
          (selected ? " bg-primary-50" : "")
        }
      >
        {text}
      </div>
    </>
  );
};
