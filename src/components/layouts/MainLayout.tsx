import { FC, ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import SubscribtionModal from '../shared/modals/SubscribtionModal';
import ContactModal from '@/components/shared/modals/ContactModal';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <SubscribtionModal />
      <ContactModal />
      <Footer />
    </>
  );
};

export default MainLayout;
