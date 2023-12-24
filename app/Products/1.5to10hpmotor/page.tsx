import React from 'react';

import Image from 'next/image';

const Product2Gallary = () => {
  const Product2Gallery = [
    { id: 1, src: '/assets/machine2.png', alt: 'Image 1' },
    { id: 2, src: '/assets/machine3.jpg', alt: 'Image 2' },
    { id: 3, src: '/assets/machine4.jpg', alt: 'Image 3' },
    { id: 4, src: '/assets/machine1.jpg', alt: 'Image 4' },
    { id: 5, src: '/assets/images/image3.jpg', alt: 'Image 5' },
    { id: 6, src: '/assets/images/image1.jpg', alt: 'Image 6' },
    { id: 7, src: '/assets/machine5.jpg', alt: 'Image 7' },
    { id: 8, src: '/assets/images/image4.jpg', alt: 'Image 8' },
    { id: 9, src: '/assets/images/image6.jpg', alt: 'Image 9' },
  ];
  return (
    <>
      <div className="flex justify-center text-center m-4">
        <h2 className="font-bold p-2 text-sm mt-4 font-montserrat text-green-800 bg-orange-300 rounded-full mb-10 md:text-xl lg:text-3xl">
          1.5 HP TO 10 HP MOTOR AND SUBMERSIBLE STARTER
        </h2>
      </div>
      <div className="grid grid-cols-1 place-items-center md:gird md:grid-cols-2 lg:grid lg:grid-cols-3 lg:border lg:m-8 lg:mt-10 lg:p-4 lg:rounded-lg lg:shadow-lg">
        {Product2Gallery.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
        ))}
      </div>
    </>
  );
};

export default Product2Gallary;
