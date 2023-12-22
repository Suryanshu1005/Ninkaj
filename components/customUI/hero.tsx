'use client';

import Image from 'next/image';
import HomepageContent from './homepageContent';
import { useState } from 'react';
import OurProducts from './ourProducts';

import { Separator } from '@/components/ui/separator';

const HeroSection = () => {
  const [isImageVisible, setImageVisible] = useState(false);

  const handleMouseEnter = () => {
    // Set the state to show the image on hover
    setImageVisible(true);
  };

  const handleMouseLeave = () => {
    // Set the state to hide the image when the hover ends
    setImageVisible(false);
  };
  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2">
        <HomepageContent />
        <Image
          className="flex md:mt-10 md:ml-10 lg:ml-24 lg:w-[600px] lg:h-[700px]"
          // style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          src="/assets/images/image2.png"
          alt="image1"
          width={400}
          height={400}
        />
        <Separator className="mt-2 w-[85%] h-1 justify-center" />
      </div>
      <div>
        <OurProducts />
      </div>
    </div>
  );
};

export default HeroSection;
