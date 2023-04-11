import React from "react";

type Props = {
  title: string;
};

export const SubTitle = (props: Props) => {
  const { title } = props;
  return (
    <>
      <h2 className="w-full text-left text-subTitle font-bold">{title}</h2>
    </>
  );
};

export const CardTitle = (props: Props) => {
  const { title } = props;
  return (
    <>
      <h3 className="w-full text-center text-xl font-bold">{title}</h3>
    </>
  );
};
