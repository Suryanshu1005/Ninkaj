import Image from 'next/image';

const OurProducts = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="flex justify-center text-4xl font-montserrat font-bold lg:text-[55px]">
          Our Products
        </h1>
        <p className="font-montserrat mt-3 text-sm font-semibold text-red-500 text-center md:mt-4 lg:mt-8">
          Revolutionize your operations with our high-performance MOTOR AND
          SUBMERSIBLE STARTERS.
        </p>
        <div className="grid grid-cols-1 place-items-center md:gird md:grid-cols-2 lg:grid lg:grid-cols-3 lg:border lg:m-8 lg:p-4 lg:rounded-lg lg:shadow-lg">
          <div className="grid place-items-center">
            <Image
              className="flex justify-center rounded-lg mt-10"
              src="/assets/images/image2.jpg"
              alt="image2"
              width={400}
              height={400}
            />
            <p className="flex justify-center w-[400px] mt-4 ml-2 text-[14px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
            </p>
          </div>
          <div className="grid place-items-center lg:mt-9 lg:w-auto lg:h-ful">
            <Image
              className="flex justify-center rounded-lg"
              src="/assets/machine3.png"
              alt="image2"
              width={400}
              height={100}
            />
            <p className="flex justify-center w-[400px] rounded-lg ml-2 text-[14px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              1.5 HP TO 10 HP MOTOR AND SUBMERSIBLE STARTER
            </p>
          </div>
          <div className="grid place-items-center mt-14">
            <Image
              className="w-[400px] rounded-lg"
              src="/assets/images/startdelta.png"
              alt="image2"
              width={400}
              height={400}
            />
            <p className="flex justify-center w-[170px] text-[14px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              STAR DELTA STARTER
            </p>
          </div>
          <div className="grid place-items-center mt-14 lg:grid lg:col-start-2">
            <Image
              className="w-[400px] rounded-lg"
              src="/assets/images/solarhybrid.png"
              alt="image2"
              width={400}
              height={400}
            />
            <p className="flex justify-center w-[210px] mt-4 text-[14px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              SOLAR HYBRID INVERTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
