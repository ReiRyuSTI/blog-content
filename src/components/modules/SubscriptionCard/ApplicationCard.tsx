import React from "react";

import { AiOutlinePlus } from "react-icons/ai";

import { ButtonSkeleton } from "../ButtonComponent";

import { CardContent } from "./CardContent";

type HasButtonProps = {
  title: string | React.ReactNode;
  miniTitle: string;
  price: string;
  accountValue: string;
  storageValue: string;
  btnText: string;
  activeFlag: boolean;
  btnColor: "compaign" | "primary-500" | "evident-gray" | "evident-orange";
  onClick?: () => void;
  cardColor:
    | "compaign"
    | "evident-blue"
    | "evident-blue-light"
    | "evident-orange"
    | "primary-500";
};

type CancelProps = {
  onClick: () => void;
};

export const ApplicationCardComponent = (props: HasButtonProps) => {
  const {
    title,
    miniTitle,
    price,
    accountValue,
    storageValue,
    btnText,
    btnColor,
    activeFlag,
    onClick,
    cardColor,
  } = props;

  return (
    <>
      <div className="inline-flex h-[367px] w-card-mini shrink-0 flex-col overflow-hidden rounded-lg bg-white shadow-xl">
        <div
          className={
            " inline-flex h-[89px] w-full flex-col items-center justify-center" +
            ` bg-${cardColor}`
          }
        >
          <div className="text-sm text-white">{miniTitle}</div>
          <div className="text-2xl font-bold text-white">{title}</div>
        </div>
        <div className="mb-4 inline-flex flex-col items-center gap-2">
          <span
            className={
              "inline-flex h-[68px] items-center justify-center text-32-40 font-bold " +
              ` text-${cardColor}`
            }
          >
            {price}
          </span>
          <CardContent content={storageValue} title={"ストレージ容量上限"} />
          <CardContent content={accountValue} title={"最大利用人数"} />
        </div>
        <div className="inline-flex w-full items-center justify-center ">
          <button
            className={
              "inline-flex h-[50px] w-mini items-center justify-center text-base text-white " +
              (activeFlag ? ` bg-${btnColor}` : " bg-evident-gray")
            }
            disabled={!activeFlag}
            onClick={onClick}
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export const ApplicationCardBigComponent = (props: HasButtonProps) => {
  const {
    title,
    miniTitle,
    price,
    accountValue,
    storageValue,
    btnText,
    btnColor,
    onClick,
    cardColor,
    activeFlag,
  } = props;

  return (
    <>
      <div className="inline-flex h-[367px] w-card-big flex-col overflow-hidden rounded-lg bg-white shadow-xl">
        <div
          className={
            " inline-flex h-[89px] w-full flex-col items-center justify-center" +
            ` bg-${cardColor}`
          }
        >
          <div className="text-sm text-white">{miniTitle}</div>
          <div className="text-2xl font-bold text-white">{title}</div>
        </div>
        <div className="mb-4 inline-flex flex-col items-center gap-2">
          <span
            className={
              "inline-flex h-[68px] items-center justify-center text-32-40 font-bold " +
              ` text-${cardColor}`
            }
          >
            {price}
          </span>
          <div className="inline-flex flex-row items-center justify-center gap-2">
            <div className="inline-flex flex-col gap-2">
              <CardContent
                content={storageValue}
                title={"ストレージ容量上限"}
              />
              <CardContent content={accountValue} title={"最大利用人数"} />
            </div>
            <div className="inline-flex h-full items-center justify-center">
              <AiOutlinePlus className="h-5 w-5 text-evident-blue" />
            </div>
            <div>
              <div className="inline-flex flex-col gap-2">
                <CardContent
                  content={"¥6,000/月"}
                  title={"ストレージ500GB追加"}
                />
                <CardContent
                  content={"1人あたり¥6,000/月"}
                  title={"利用人数追加"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full items-center justify-center bg-white">
          <button
            className={
              "inline-flex h-[50px] w-mini items-center justify-center text-base text-white " +
              (activeFlag ? ` bg-${btnColor}` : " bg-evident-gray")
            }
            disabled={!activeFlag}
            onClick={onClick}
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export const ApplicationCancleComponent = (props: CancelProps) => {
  const { onClick } = props;
  return (
    <>
      <div className="flex flex-row justify-between border border-evident-gray py-4 px-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">プラン解約</span>
          <span className="text-sm ">
            ご利用を終了したい場合は、こちらからお手続きください。
          </span>
        </div>
        <div className="flex items-center justify-center">
          <ButtonSkeleton
            activeFlag={true}
            size="Medium"
            text="プラン解約"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};
