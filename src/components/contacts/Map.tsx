'use client';

import { memo, useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ContactsMarkers } from '@/constants/contacts.constants';
import CustomInfoWindow from '@/components/contacts/CustomInfoWindow';
import { useCurrentLocale } from '@/locales/client';
import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';
import ArrowButton from '@/components/shared/ui/ArrowButton';
import ZoomButton from '@/components/shared/ui/ZoomButton';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const mapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }, { lightness: 17 }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 18 }],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 16 }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#dedede' }, { lightness: 21 }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ color: '#fefefe' }, { lightness: 20 }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
  },
];

function MyMap() {
  const [activeMarker, setActiveMarker] = useState<null | number>(null);
  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [initialLoadComplete, setInitialLoadComplete] =
    useState<boolean>(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const initialBoundsRef = useRef<google.maps.LatLngBounds | null>(null);
  const locale = useCurrentLocale();

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: false,
  };

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const handleMarkerClick = (markerId: number) => {
    setActiveMarker(markerId);
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    const bounds = new google.maps.LatLngBounds();
    ContactsMarkers.forEach(({ position }) => bounds.extend(position));
    initialBoundsRef.current = bounds;
    map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
  }, []);

  const handleZoomChange = (increment: boolean) => {
    if (mapRef.current) {
      let currentZoom = mapRef.current.getZoom() || 0;
      mapRef.current.setZoom(currentZoom + (increment ? 1 : -1));
    }
  };

  const handleMapChange = () => {
    if (initialLoadComplete) {
      setShowResetButton(true);
    } else {
      setInitialLoadComplete(true);
    }
  };

  const handleResetMap = () => {
    if (mapRef.current && initialBoundsRef.current) {
      mapRef.current.fitBounds(initialBoundsRef.current, {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      });
      setTimeout(() => setShowResetButton(false), 1000);
    }
  };

  if (!googleMapsApiKey) {
    return (
      <div>Error: Google Maps API key is not set in environment variables.</div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} loadingElement={<div />}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={options}
          onLoad={onLoad}
          onIdle={handleMapChange}
        >
          {ContactsMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              onClick={() => handleMarkerClick(marker.id)}
              icon='/icons/marker.svg'
            />
          ))}
          {ContactsMarkers.map(
            (marker) =>
              activeMarker === marker.id && (
                <CustomInfoWindow
                  key={marker.id}
                  markerCountry={marker.country[locale]}
                  position={marker.position}
                  onCloseClick={() => setActiveMarker(null)}
                  content={
                    <div className='mt-4 flex h-full cursor-pointer flex-col justify-between'>
                      <div className='flex flex-col pb-2'>
                        <p className='b4m-body-reg text-blue-700'>
                          {marker.name}
                        </p>
                        <p className='b4m-body-reg text-blue-700'>
                          {marker.address}
                        </p>
                      </div>
                      {!!marker.phone && (
                        <a
                          href={`tel:${marker.phone}`}
                          className='b3m-body-med flex items-center gap-1 text-blue-700'
                        >
                          <PhoneIcon />
                          {marker.phone}
                        </a>
                      )}
                      {!!marker.email && (
                        <a
                          href={`mailto:${marker.email}`}
                          className='b3m-body-med flex items-center gap-1 text-blue-700'
                        >
                          <EnvelopeIcon />
                          {marker.email}
                        </a>
                      )}
                    </div>
                  }
                />
              )
          )}
        </GoogleMap>
        <div className='absolute bottom-6 right-6 flex flex-col'>
          <ZoomButton zoomType='in' onClick={() => handleZoomChange(true)} />
          <ZoomButton zoomType='out' onClick={() => handleZoomChange(false)} />
          {showResetButton && (
            <ArrowButton
              onClick={handleResetMap}
              direction='left'
              className='mt-2'
            />
          )}
        </div>
      </div>
    </LoadScript>
  );
}

export default memo(MyMap);
