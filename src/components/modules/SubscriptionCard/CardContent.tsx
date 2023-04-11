import React from "react";

type Props = {
  title: string;
  content: string;
};

export const CardContent = (props: Props) => {
  const { title, content } = props;
  return (
    <>
      <div className="inline-flex h-[58px] w-mini flex-col items-center justify-center rounded-3xl border border-primary-50">
        <li className="list-none text-xs">{title}</li>
        <li className="list-none text-base font-bold">{content}</li>
      </div>
    </>
  );
};
