import Image from 'next/image';

const Product = () => {
  const text = [
    'Welcome to Ninkaj Electronics, a convergence of ingenuity and technology where limitless possibilities unfold. Immerse yourself in a universe where automation solutions transcend conventional boundaries, optimizing workflows, and enhancing overall productivity. Join us on the forefront of automation excellence, where we collectively shape the future of industry efficiency.',
    'At Ninkaj Electronics, we invite you to unleash the transformative power of automation. Elevate your operational prowess, boost productivity, and redefine success in the dynamic digital era. Explore cutting-edge solutions meticulously designed to revolutionize diverse industries, paving the way for a future where efficiency knows no bounds.',
    'Every product in our repertoire is a testament to precision and reliability. We seamlessly blend cutting-edge technology with meticulous craftsmanship, ensuring excellence in every detail. Our commitment is to redefine what is possible in technology.',
    'Embark on a journey into the future with our latest technological marvels. From intelligent solutions that streamline processes to immersive experiences that captivate, we redefine the realm of possibilities. At Ninkaj Electronics, we are not just pioneers; we are architects of a future where efficiency and innovation seamlessly converge, promising a landscape where technology meets imagination with unparalleled finesse',
  ];
  return (
    <>
      <div className="flex flex-col justify-center text-center pt-5 pl-3 pr-3 md:flex md:flex-col md:justify-center md:text-center md:mr-28 md:ml-28 lg:mr-32 lg:ml-32">
        <h1 className="text-red-800 font-montserrat font-bold text-4xl mt-5 underline">
          About us
        </h1>
        <div className="mt-6 relative flex text-center justify-center flex-col gap-y-5 mb-10 md:mb-32 lg:mb-32 lg:mt-14 lg:text-start">
          {text.map((item, index) => (
            <>
              <p
                className="flex gap-4 font-montserrat font-semibold text-[12px] md:text-[14px] lg:text-[16px]"
                key={index}
              >
                <Image
                  className="hidden lg:flex"
                  src="/assets/icons/pointer_about.svg"
                  alt="pointer image"
                  width={20}
                  height={20}
                />
                {item}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
