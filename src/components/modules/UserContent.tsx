import React from "react";

type Props = {
  title: string;
  content: string;
};

export const UserContent = (props: Props) => {
  const { title, content } = props;
  return (
    <>
      <div className="inline-flex h-[52px] w-full flex-row items-center border-b border-primary-50">
        <span className="inline-block w-[200px]">{title}</span>
        <span className="inline-block grow">{content}</span>
      </div>
    </>
  );
};
