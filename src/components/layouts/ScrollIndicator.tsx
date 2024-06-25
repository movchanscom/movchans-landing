'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

interface Section {
  id: string;
  element: HTMLElement;
}

const ScrollIndicator = () => {
  const pathname = usePathname();
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<HTMLElement[]>([]);
  const moreThan1280px = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    const sectionElements = document.querySelectorAll<HTMLElement>(
      'section[id]:not([id=""])'
    );
    const sectionArray = Array.from(sectionElements).map((section) => ({
      id: section.id,
      element: section,
    }));
    setSections(sectionArray);
    sectionRefs.current = Array.from(sectionElements);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionInView = sectionRefs.current.find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      });

      if (sectionInView) {
        setActiveSection(sectionInView.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleClick = (id: string) => {
    const index = sections.findIndex((section) => section.id === id);
    const headerOffset = 88;
    const sectionElement = sectionRefs.current[index];

    if (sectionElement) {
      const sectionTop =
        sectionElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  if (!moreThan1280px) {
    return null;
  }

  return (
    <div className='fixed left-4 top-1/2 z-50 flex -translate-y-1/2 transform flex-col gap-4'>
      {sections.map((section) => {
        const isActive = section.id === activeSection;
        const activeSectionIndex = sections.findIndex(
          (s) => s.id === activeSection
        );
        const isFar =
          Math.abs(sections.indexOf(section) - activeSectionIndex) > 3;
        return (
          <div
            key={section.id}
            className={`h-2 w-2 cursor-pointer rounded-full transition-opacity duration-300 ${isActive ? 'bg-blue-600' : 'bg-gray-200'} ${isFar ? 'opacity-20' : ''}`}
            onClick={() => handleClick(section.id)}
          />
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
