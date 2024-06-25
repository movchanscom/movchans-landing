import { FC } from 'react';
import ArrowRightLongIcon from '/public/icons/arrow-right-long.svg';
import { useRouter } from 'next/navigation';

type ReadMoreButtonProps = {
  label: string;
  action?: () => void;
  route?: string;
};

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ label, action, route }) => {
  const router = useRouter();

  const handleAction = () => {
    action && action();
    route && router.push(route);
  };
  return (
    <button
      className='flex items-center gap-4 p-3 transition-transform duration-200 hover:translate-x-[10px]'
      onClick={handleAction}
    >
      <p className='b3m-body-med text-blue-600'>{label}</p>
      <ArrowRightLongIcon />
    </button>
  );
};

export default ReadMoreButton;
