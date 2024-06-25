import { useScopedI18n } from '@/locales/client';
import clsx from 'clsx';
import { FC } from 'react';

type TabsItemProps = {
  item: string;
  activeTab: string;
  setTab: (item: string) => void;
  className?: string;
  translationPath?: string;
};

const TabsItem: FC<TabsItemProps> = ({
  item,
  activeTab,
  setTab,
  className,
  translationPath,
}) => {
  const t = useScopedI18n(translationPath as any);

  return (
    <button
      className={clsx(
        'rounded-[2.5rem] px-4 py-3 transition-all duration-200',
        {
          'bg-blue-600 text-basic-white hover:bg-blue-500': item === activeTab,
          'text-blue-600 hover:bg-gray-200 hover:text-gold-600':
            item !== activeTab,
        },
        className
      )}
      onClick={() => setTab(item)}
    >
      {t(item as any, {})}
    </button>
  );
};

export default TabsItem;
