'use client';

import Typewriter from 'typewriter-effect';

const HomepageContent = () => {
  return (
    <div className="flex flex-col p-10 justify-center text-center lg:text-start lg:pl-36">
      <h1 className="text-[30px] font-montserrat font-medium text-red-800 w-full lg:text-[54px] lg:w-[721px]">
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
      <h3 className="text-[15px] font-montserrat text-black/50 font-medium mt-3 lg:text-[18px] lg:mt-2">
        where technology meets imagination.
      </h3>
      <p className="mt-4 text-justify font-rubik lg:mt-8">
        Step into a realm of limitless possibilities with Ninkaj Electronics.
        Our automation solutions transcend boundaries, optimizing workflows and
        enhancing productivity. Join us in shaping the future of industry
        efficiency. Welcome to the forefront of automation excellence.
      </p>
      <p className="mt-4 text-justify font-rubik">
        Unleash the power of automation with Ninkaj Electronics. Elevate your
        operations, boost productivity, and redefine success in the digital era.
        Explore cutting-edge solutions designed to transform industries. Welcome
        to a future where efficiency knows no bounds.
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
    </div>
  );
};

export default HomepageContent;
