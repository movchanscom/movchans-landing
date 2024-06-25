import ProvidersCard from '@/components/home/sections/PartnersAndProviders/StakeholdersPresentation/Providers/ProvidersCard';
import { PROVIDER_IMAGES_COUNT } from '@/constants';
import { NumbersToFour } from '@/types/constants.type';
import { motion } from 'framer-motion';

const Providers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'
    >
      {Array.from(Array(4).keys()).map((index) => (
        <ProvidersCard
          key={index}
          imagesLength={PROVIDER_IMAGES_COUNT[index]}
          number={(index + 1) as NumbersToFour}
        />
      ))}
    </motion.div>
  );
};

export default Providers;
