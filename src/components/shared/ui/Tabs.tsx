'use client';

import { FC } from 'react';
import TabsItem from '@/components/shared/ui/TabsItem';
import clsx from 'clsx';

type TabsProps = {
  items: string[];
  activeTab: string;
  handleActiveItem: (item: string) => void;
  className?: string;
  tabClassName?: string;
  translationPath?: string;
};

const Tabs: FC<TabsProps> = ({
  items,
  handleActiveItem,
  activeTab,
  className,
  tabClassName,
  translationPath,
}) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-2 rounded-[2.5rem] bg-gray-100 p-2 md:mx-auto md:w-fit md:flex-row xl:ml-0 xl:mr-0',
        className
      )}
    >
      {items.map((item) => (
        <TabsItem
          key={item}
          item={item}
          activeTab={activeTab}
          setTab={handleActiveItem}
          className={tabClassName}
          translationPath={translationPath}
        />
      ))}
    </div>
  );
};

export default Tabs;
