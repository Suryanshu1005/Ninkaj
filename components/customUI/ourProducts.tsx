import Image from 'next/image';

const OurProducts = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-4xl ml-6 font-rubik font-normal">Our Products</h1>
        <div className="grid grid-cols-6 gap-4 md:flex md:gap-0">
          <div className="col-start-2 col-span-12">
            <Image
              className="border rounded-lg mt-10"
              src="/assets/images/image2.jpg"
              alt="image2"
              width={400}
              height={400}
            />
            <p className="w-[500px] mt-4 ml-2 text-[14px] font-semibold font-montserrat text-red-900">
              .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
            </p>
          </div>
          <div className="col-start-2 col-span-12">
            <Image
              className="w-[400px] rounded-lg mt-10 border"
              src="/assets/machine3.png"
              alt="image2"
              width={700}
              height={700}
            />
            <p className="w-[500px] mt-4 rounded-lg ml-2 text-[14px] font-semibold font-montserrat text-red-900">
              .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
            </p>
          </div>
          <div className="col-start-2 col-span-12 mt-10">
            <Image
              className="w-[400px] rounded-lg border"
              src="/assets/images/startdelta.png"
              alt="image2"
              width={700}
              height={700}
            />
            <p className="w-[500px] mt-4 ml-[130px] text-[14px] font-semibold font-montserrat text-red-900">
              STAR DELTA STARTER
            </p>
          </div>
          <div className="col-start-2 col-span-12 mt-10">
            <Image
              className="w-[400px] rounded-lg border"
              src="/assets/images/solarhybrid.png"
              alt="image2"
              width={700}
              height={700}
            />
            <p className="w-[500px] mt-4 ml-[130px] text-[14px] font-semibold font-montserrat text-red-900">
              SOLAR HYBRID INVERTER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
