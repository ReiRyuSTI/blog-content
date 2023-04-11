import React from "react";

import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  oldPlan: {
    account: string;
    storage: string;
  };
  newPlan: {
    account: string;
    storage: string;
  };
};

export const DiffPlanInfo = (props: Props) => {
  const { oldPlan, newPlan } = props;
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-primary-50 p-6 text-base">
      <ul className="flex flex-col gap-2">
        <li className="text-gray">最大利用人数</li>
        <li className="flex flex-row items-center font-bold">
          <span>{oldPlan.account}人</span>
          <BsArrowRightShort className="h-4 w-4" />
          <span className="text-error-main">{newPlan.account}人</span>
        </li>
      </ul>
      <ul className="flex flex-col gap-2">
        <li className="text-gray">ストレージ容量上限</li>
        <li className="flex flex-row items-center font-bold">
          <span>{oldPlan.storage}GB</span>
          <BsArrowRightShort className="h-4 w-4" />
          <span className="text-error-main">{newPlan.storage}GB</span>
        </li>
      </ul>
    </div>
  );
};

export const NoticeComponent = () => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-error-pale px-6 py-4 text-error-main">
      <span className="text-xl font-bold">注意事項</span>
      <span className="text-sm">
        申請時にダウングレードするプランの容量や人数を超えるデータがある場合は、ダウングレードができません。お客様ご自身で上記制限までデータを削減した状態で申請をお願いいたします。
      </span>
    </div>
  );
};
