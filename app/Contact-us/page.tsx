import Image from 'next/image';

const Product = () => {
  const data = [
    'All our products are completely made in India. Which ensures complete reliability',
    'All products manufactured by Ninkaj Electronics Regd Office 634/6 A-3 Sugamau Indira Nagar Lucknow',
    'Uttar Pradesh, Pin - 226016',
    'Email us : helpdesk@ninkaj.com',
    'Call us : +91 - 9455455543',
  ];
  return (
    <>
      <div className="flex justify-center text-center p-3 font-montserrat text-xl mt-10 font-bold text-rose-700 sm:text-[25px] md:text-[30px] lg:text-4xl">
        Want to connect?
      </div>
      <div className="flex flex-col text-start justify-center pt-10 lg:border-2 lg:rounded-full  lg:m-20 lg:pt-0 xl:mb-10">
        {data.map((item, index) => (
          <p
            key={index}
            className="flex gap-2 p-4 font-montserrat font-bold text-[12px] md:ml-52 md:text-[14px] md:w-[550px] lg:ml-72 lg:text-[18px] xl:w-[700px] xl:ml-[24rem]"
          >
            <Image
              className=""
              src="/assets/icons/dot.svg"
              alt="dot"
              width={10}
              height={10}
            />
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default Product;
