'use client';

import Typewriter from 'typewriter-effect';

const HomepageContent = () => {
  return (
    <>
      <div className="flex flex-col p-10 justify-center text-center lg:text-start lg:pl-36 lg:p-0">
        <h1 className="text-[30px] font-montserrat font-medium text-red-800 w-full lg:text-[54px] lg:w-[721px] lg:mt-[-100px] lg:mb-10">
          {/* <h1 className="sm:text-[28px] lg:text-[58px] font-medium font-montserrat text-700 text-red-800 w-[690px] "> */}
          <Typewriter
            options={{
              strings: ['Welcome to', 'NINKAJ ELECTRONICS'],
              autoStart: true,
              loop: true,
              delay: 200,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <h3 className="text-md font-montserrat text-red-500 font-medium lg:text-[18px]">
          where technology meets imagination.
        </h3>
        <p className="mt-4 text-justify font-rubik lg:mt-8">
          Step into a realm of limitless possibilities with Ninkaj Electronics.
          Our automation solutions transcend boundaries, optimizing workflows
          and enhancing productivity. Join us in shaping the future of industry
          efficiency. Welcome to the forefront of automation excellence.
        </p>
        <p className="mt-4 text-justify font-rubik">
          Unleash the power of automation with Ninkaj Electronics. Elevate your
          operations, boost productivity, and redefine success in the digital
          era. Explore cutting-edge solutions designed to transform industries.
          Welcome to a future where efficiency knows no bounds.
        </p>
        <p className="mt-4 text-justify font-rubik">
          Every product is a testament to precision and reliability. We blend
          cutting-edge technology with meticulous craftsmanship, ensuring
          excellence in every detail.
        </p>
        <p className="mt-4 text-justify font-rubik">
          Unleash the power of tomorrow with our latest tech marvels. From smart
          solutions to immersive experiences, we redefine what&apos;s possible.
        </p>
        <div className="mt-12 ml-6 p-6 bg-red-400 w-52 rounded-3xl lg:hover:bg-gradient-to-r from-red-300 to-pink-500 lg:cursor-pointer">
          <button className="font-montserrat font-bold text-lg">
            Buy our product
          </button>
        </div>
      </div>
    </>
  );
};

export default HomepageContent;
