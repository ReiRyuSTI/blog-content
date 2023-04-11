import React from "react";

export const ConfirmationNonOptionCardComponent = () => {
  return (
    <>
      <div className="inline-flex w-72 flex-col overflow-hidden rounded-lg shadow-md">
        <div className="flex w-full items-center justify-center bg-gray py-3 text-base font-bold text-white">
          Title
        </div>
        <div className="flex flex-col gap-4 p-6">
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">サービス</li>
            <li className="text-base font-bold">OLSC</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">契約</li>
            <li className="text-base font-bold">Freeプラン</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">ストレージ容量上限</li>
            <li className="text-base font-bold">50GB</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">最大利用人数</li>
            <li className="text-base font-bold">2人</li>
          </ul>
          <span className="inline-block w-full border-t border-evident-gray" />
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">合計（税込）</span>
            <span className="text-base font-bold">0/月</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const ConfirmationHasOptionCardComponent = () => {
  return (
    <>
      <div className="inline-flex w-72 flex-col overflow-hidden rounded-lg shadow-md">
        <div className="flex w-full items-center justify-center bg-gray py-3 text-base font-bold text-white">
          Title
        </div>
        <div className="flex flex-col gap-4 p-6">
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">サービス</li>
            <li className="text-base font-bold">OLSC</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">契約</li>
            <li className="text-base font-bold">Freeプラン</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">ストレージ容量上限</li>
            <li className="text-base font-bold">50GB</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">最大利用人数</li>
            <li className="text-base font-bold">2人</li>
          </ul>
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">基本料金（税込）</span>
            <span className="text-base font-bold">0/月</span>
          </div>
          <span className="inline-block w-full border-t border-evident-gray" />
          <div className="text-base font-bold">オプション</div>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">追加ストレージ容量</li>
            <li className="flex flex-row items-center justify-between text-base font-bold">
              <span className="block">1000GB</span>
              <span className="block">12,000円/月</span>
            </li>
            <li className="flex justify-end text-xs">6,000円（500GB）/月×2</li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-gray">追加利用人数</li>
            <li className="flex flex-row items-center justify-between text-base font-bold">
              <span className="block">2人</span>
              <span className="block">12,000円/月</span>
            </li>
            <li className="flex justify-end text-xs">6,000円（1人）/月×2</li>
          </ul>
          <span className="inline-block w-full border-t border-evident-gray" />
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">合計（税込）</span>
            <span className="text-base font-bold">3/月</span>
          </div>
        </div>
      </div>
    </>
  );
};
