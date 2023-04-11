import React from "react";

type NonSubscriveServiceProps = {
  name: string;
  description: string;
  onClick: () => void;
};

export const NonSubscribeSurviceComponent = (
  props: NonSubscriveServiceProps
) => {
  const { name, description, onClick } = props;
  return (
    <div>
      {name} {description} <button onClick={onClick}>申し込む</button>
    </div>
  );
};

type SubscriveServiceProps = {
  name: string;
  plaName: string;
  amount: string;
  onClickLogin?: () => void;
  onClickPlanManagement?: () => void;
};

export const SubscribeSurviceComponent = (props: SubscriveServiceProps) => {
  const { name } = props;
  return <>{name}</>;
};
