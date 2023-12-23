'use client';

import Image from 'next/image';
import HomepageContent from './homepageContent';
import { useState } from 'react';
import OurProducts from './ourProducts';

import { Separator } from '@/components/ui/separator';
import WhyChooseUs from './WhyChooseUs/whychooseus';

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
      <div className="flex flex-col justify-center items-center md:grid md:place-items-center lg:grid lg:grid-cols-2">
        <HomepageContent />
        <Image
          className="flex md:mt-10 md:ml-10 lg:ml-24 lg:w-[600px] lg:h-[700px]"
          // style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          src="/assets/images/image2.png"
          alt="image1"
          width={400}
          height={400}
        />
      </div>
      <Separator className="mt-2 mr-20 w-[100%] h-[2.5px] md:flex md:justify-center md:w-[100%] lg:w-[100%] lg:grid lg:place-items-center" />
      <div>
        <OurProducts />
      </div>
      <Separator className="mt-2 mr-20 w-[100%] h-[2.5px] md:flex md:justify-center md:w-[100%] lg:w-[100%] lg:grid lg:place-items-center" />
      <div>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default HeroSection;
