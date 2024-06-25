'use client';

import { OverlayView } from '@react-google-maps/api';
import CloseIcon from '/public/icons/close.svg';
import { FC, ReactNode } from 'react';

interface CustomInfoWindowProps {
  position: google.maps.LatLngLiteral;
  content: ReactNode;
  onCloseClick: () => void;
  markerCountry: string;
}

const CustomInfoWindow: FC<CustomInfoWindowProps> = ({
  position,
  content,
  onCloseClick,
  markerCountry,
}) => {
  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className='absolute -left-[8.75rem] bottom-[60px] z-10 min-h-[12rem] w-[17.5rem] rounded-lg bg-basic-white p-4 shadow-lg'>
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between'>
            <h6 className='b1m-body-med text-blue-700'>{markerCountry}</h6>
            <button onClick={onCloseClick} className='p-2'>
              <CloseIcon />
            </button>
          </div>
          <div className='flex grow flex-col'>{content}</div>
        </div>
        <span className='absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-basic-white shadow-lg'></span>
      </div>
    </OverlayView>
  );
};

export default CustomInfoWindow;
