import Image from 'next/image';
import Link from 'next/link';

const OurProducts = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="flex justify-center text-4xl font-montserrat font-bold lg:text-[55px]">
          Our Products
        </h1>
        <p className="font-montserrat mt-3 text-[12px] font-semibold text-red-500 text-center md:mt-4 md:text-[14px] lg:mt-8 lg:text-[16px]">
          Revolutionize your operations with our high-performance MOTOR AND
          SUBMERSIBLE STARTERS.
        </p>
        <div className="grid grid-cols-1 place-items-center md:gird md:grid-cols-2 lg:grid lg:grid-cols-3 lg:border lg:m-8 lg:mt-10 lg:p-4 lg:rounded-lg lg:shadow-lg">
          <div className="grid place-items-center">
            <Link href="https://dl.flipkart.com/s/VGfzgauuuN">
              <Image
                className="flex justify-center rounded-lg mt-10"
                src="/assets/images/image2.jpg"
                alt="image2"
                width={400}
                height={400}
              />
              <p className="flex justify-center w-[400px] ml-2 text-[11px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:text-[14px] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
                .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
              </p>
            </Link>
          </div>
          <div className="grid place-items-center lg:mt-9 lg:w-auto lg:h-ful">
            <Link href="https://dl.flipkart.com/s/VGldfEuuuN">
              <Image
                className="flex justify-center rounded-lg"
                src="/assets/machine3.png"
                alt="image2"
                width={400}
                height={100}
              />
              <p className="flex justify-center w-[400px] rounded-lg ml-2 text-[11px] font-semibold font-montserrat text-red-900 md:mt-7 lg:hover:text-[#000000] lg:mt-[-8px] lg:text-[14px] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
                1.5 HP TO 10 HP MOTOR AND SUBMERSIBLE STARTER
              </p>
            </Link>
          </div>
          <div className="grid place-items-center mt-14">
            <Image
              className="w-[370px] rounded-lg"
              src="/assets/images/startdelta.png"
              alt="image2"
              width={300}
              height={300}
            />
            <p className="flex justify-center w-[170px] mt-6 text-[11px] font-semibold font-montserrat text-red-900 lg:hover:text-[#000000] lg:cursor-pointer lg:text-[14px] lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              STAR DELTA STARTER
            </p>
          </div>
          <div className="grid place-items-center mt-14 lg:grid lg:col-start-2">
            <Image
              className="w-[370px] rounded-lg"
              src="/assets/images/solarhybrid.png"
              alt="image2"
              width={300}
              height={300}
            />
            <p className="flex justify-center w-[210px] mt-6 text-[11px] font-semibold font-montserrat text-red-900 md:mt-[-10px] lg:hover:text-[#000000] lg:mt-6 lg:text-[14px] lg:cursor-pointer lg:hover:border lg:hover:rounded-lg lg:hover:bg-red-300">
              SOLAR HYBRID INVERTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
