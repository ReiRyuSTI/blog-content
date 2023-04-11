import React from 'react';
import { useLocation } from 'react-router';

import { MenuContent } from './MenuContent';

export const MenuComponent = () => {
  const onClick = () => {
    return;
  };
  const location = useLocation();
  console.log(location);

  return (
    <div className="w-52 rounded-lg shadow-lg">
      <MenuContent text="TOP" onClick={onClick} selected={true} />
      <MenuContent
        text="サービス一覧"
        onClick={onClick}
        selected={location.pathname.includes('/dummy')}
      />
      <MenuContent
        text="請求情報"
        onClick={onClick}
        selected={location.pathname.includes('/dummy')}
      />
      <MenuContent
        text="アカウント情報"
        onClick={onClick}
        selected={location.pathname.includes('/dummy')}
      />
    </div>
  );
};
