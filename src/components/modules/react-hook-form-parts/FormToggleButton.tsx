import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  title: string;
  imgLink: string;
  state: boolean;
  onChange: (value: boolean) => void;
};

export const FormToggleButton = (props: Props) => {
  const { state, onChange, title, imgLink } = props;
  const onClickTrue = () => {
    onChange(true);
  };
  const onClickFalse = () => {
    onChange(false);
  };
  return (
    <>
      <div className="inline-flex h-[50px] w-full grow items-center justify-between">
        <div className="inline-flex w-[121px] gap-4">
          <img
            src={imgLink}
            className="h-[50px] w-[50px] object-contain"
            alt=""
          />
          <span className="flex items-center">{title}</span>
        </div>
        <div className="inline-flex w-[360px] flex-row gap-4">
          <button
            type="button"
            className={
              "inline-flex h-9 w-[152px] items-center justify-center rounded-lg " +
              (state ? "bg-primary-500 text-white" : "bg-white text-[#777777]")
            }
            onClick={onClickTrue}
          >
            <AiOutlineCheck className={state ? "inline-block" : "hidden"} />
            持っている
          </button>
          <button
            type="button"
            className={
              "inline-flex h-9 w-[152px] items-center justify-center rounded-lg " +
              (!state ? "bg-primary-500 text-white" : "bg-white text-[#777777]")
            }
            onClick={onClickFalse}
          >
            <AiOutlineCheck className={!state ? "inline-block" : "hidden"} />
            持っていない
          </button>
        </div>
      </div>
    </>
  );
};
