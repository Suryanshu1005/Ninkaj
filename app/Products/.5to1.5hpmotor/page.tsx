import React from 'react';

import Image from 'next/image';

const Product1Gallary = () => {
  const Product1Gallery = [
    { id: 1, src: '/assets/images/image7.jpg', alt: 'Image 1' },
    { id: 2, src: '/assets/machine8.jpg', alt: 'Image 2' },
    { id: 3, src: '/assets/machine9.jpg', alt: 'Image 3' },
    { id: 4, src: '/assets/machine10.jpg', alt: 'Image 4' },
    { id: 5, src: '/assets/machine7.jpg', alt: 'Image 5' },
    { id: 6, src: '/assets/images/image2.jpg', alt: 'Image 6' },
    { id: 7, src: '/assets/images/image91.jpg', alt: 'Image 7' },
    { id: 8, src: '/assets/images/image12.jpg', alt: 'Image 8' },
    { id: 9, src: '/assets/images/image11.jpg', alt: 'Image 9' },
  ];
  return (
    <>
      <div className="flex justify-center text-center m-4">
        <h2 className="font-bold p-2 text-sm mt-4 font-montserrat text-green-800 bg-orange-300 rounded-full mb-10 md:text-xl lg:text-3xl">
          .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
        </h2>
      </div>
      <div className="grid grid-cols-1 col-start-3 mb-[-10px] place-items-center md:gird md:grid-cols-2 lg:grid lg:grid-cols-3 lg:border lg:m-8 lg:mt-10 lg:p-4 lg:rounded-lg lg:shadow-lg">
        {Product1Gallery.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
          />
        ))}
      </div>
    </>
  );
};

export default Product1Gallary;
