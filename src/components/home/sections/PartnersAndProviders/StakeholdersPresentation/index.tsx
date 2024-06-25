'use client';

import Tabs from '@/components/shared/ui/Tabs';
import { PARTNERS_AND_PROVIDERS_ITEMS } from '@/constants';
import { useScopedI18n } from '@/locales/client';
import { useState } from 'react';
import Providers from './Providers';
import PresentationTab from './PresentationTab';
import { AnimatePresence } from 'framer-motion';

const StakeholdersPresentation = () => {
  const t = useScopedI18n('home.partnersAndProviders');
  const translatedItems = PARTNERS_AND_PROVIDERS_ITEMS.map((item) =>
    t(`${item}.title`)
  );
  const [activeTab, setActiveTab] = useState(translatedItems[0]);

  const handleActiveItem = (item: string) => {
    setActiveTab(item);
  };

  return (
    <div className='flex flex-col gap-10'>
      <Tabs
        items={translatedItems}
        activeTab={activeTab}
        handleActiveItem={handleActiveItem}
      />
      <AnimatePresence mode='wait'>
        {activeTab === translatedItems[0] && <Providers key='providers' />}

        {activeTab === translatedItems[1] && (
          <PresentationTab
            lastSlagToImage='clearing-systems/system'
            translationKey='clearingSystems'
            imagesLength={4}
            key='systems'
          />
        )}
        {activeTab === translatedItems[2] && (
          <PresentationTab
            lastSlagToImage='databases/database'
            translationKey='dataBases'
            imagesLength={9}
            key='databases'
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StakeholdersPresentation;
