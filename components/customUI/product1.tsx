import Image from 'next/image';
import Link from 'next/link';

const Product1 = () => {
  const product1Features = [
    'ALL NOTIFICATION WILL SHOW ON BIG SIZE DIGITAL LCD DISPLAY ',
    'SET OVER VOLTAGE AND CURRENT PROTECTION',
    'SET TIMING(HOUR AND MINUTE) FOR START AND STOP',
    'WHEN WATER SENSOR WILL CONNECT IT WILL AUTOMATICALLY START AND STOP ACCORDING TO WATER LEVEL',
    'STARTER WATER SENSOR SUPPORTED TWO POINT HIGH LELVEL AND LOW LEVEL',
    'WATER SENSOR TYPE NO(NORMAL OPEN)',
    'OVER FLOW TIME SET',
    'DELAY START TIME SET',
    'THE STATUS OF ON AND OFF WILL SHOW THROUGH LED LIGHT',
    'SOUND NOTIFICATION',
    'IT CAN BE TURNED ON OR OFF FROM MANY PLACES',
    'HIGH QUALITY MATERIAL AND COMPONENT USE',
    'LONG LIFE',
    'STARTER WIDE RANGE VOLTAGE SUPPORT ( 130 VOLT TO 290 VOLT)',
    'MAXIMUM LOAD CAPACITY UP TO 12 AMP',
    'EMERGENCY SWITCH',
    'STARTER TYPE DOL',
    'THIS STARTER IS AVAILABLE IN SINGLE PHASE ONLY',
    'EASY INSTALLATION',
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-center font-montserrat font-bold text-red-800 text-2xl text-center lg:mt-[55px] lg:mb-[-10px]">
        .5 HP TO 1.5 HP MOTOR AND SUBMERSIBLE STARTER
      </div>
      <Image
        className="flex justify-center ml-5 lg:w-[550px] lg:h-[650px] lg:mt-10"
        src="/assets/images/image2.png"
        alt="image"
        width={400}
        height={400}
      />
      <Link
        href="Products/gallary"
        className="flex justify-center mb-5 mt-[-20px] text-red-300 underline underline-offset-2"
      >
        View product galary
      </Link>
      <div className="flex flex-col relative justify-center gap-y-2 lg:mb-20">
        {product1Features.map((item, index) => (
          <div
            key={index}
            className="flex border pl-3 pr-1 h-14 items-center text-[13px] font-rubik font-semibold lg:w-[500px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product1;