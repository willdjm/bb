
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Definindo isVisible como boolean

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed z-50 bottom-8 right-10 bg-blue-950 text-white p-4 rounded-full shadow-lg hover:bg-green-900 focus:outline-none"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
    </div>
  );
};
