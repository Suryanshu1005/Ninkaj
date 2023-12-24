import Image from 'next/image';
import React, { FC } from 'react';

interface ImageGalleryProps {
  prodid: number;
}

const ImageGallery: FC<ImageGalleryProps> = ({ prodid }) => {
  const Product2Gallery = [
    { id: 1, src: '/assets/machine2.png', alt: 'Image 1' },
    { id: 2, src: '/assets/machine3.jpg', alt: 'Image 2' },
    { id: 3, src: '/assets/machine4.jpg', alt: 'Image 2' },
    { id: 4, src: '/assets/machine10.jpg', alt: 'Image 2' },
    { id: 5, src: '/assets/machine11.jpg', alt: 'Image 2' },
    { id: 6, src: '/assets/images/image2.jpg', alt: 'Image 2' },
    { id: 7, src: '/assets/images/image91.jpg', alt: 'Image 2' },
    { id: 8, src: '/assets/images/image12.jpg', alt: 'Image 2' },
    { id: 9, src: '/assets/images/image11.jpg', alt: 'Image 2' },
  ];
  return prodid === 1 ? (
    <div>
      <h2>prod1</h2>
      {Product1Gallery.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  ) : (
    <div>
      <h1>prod2</h1>
      {Product2Gallery.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageGallery;
