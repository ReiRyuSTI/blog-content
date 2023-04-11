import React from "react";

type Props = {
  email: string;
  organization: string;
  name: string;
};

export const AccountMiniCardComponent = (props: Props) => {
  const { name, email, organization } = props;
  return (
    <div className="flex w-72 flex-col gap-1 rounded-lg border border-evident-gray px-6 py-4 shadow-sm">
      <span className="inline-block w-full text-base font-bold">
        {organization}
      </span>
      <span className="inline-block w-full text-2xl font-bold">{name}</span>
      <span className="inline-block w-full text-base text-gray">{email}</span>
    </div>
  );
};
