import styles from './whychooseus.module.css';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col mb-20 items-center">
      <div className="flex justify-center mt-20">
        <h1 className="text-4xl font-montserrat font-bold md:text-[30px] lg:text-[55px]">
          Why choose us
        </h1>
      </div>
      <div>
        <p className="font-montserrat mt-3 text-[12px] font-semibold text-red-500 text-center md:mt-4 md:text-[14px] lg:mt-8 lg:text-[16px]">
          Empowering Your Daily Life with Technological Ingenuity and Unmatched
          Quality.
        </p>
      </div>
      <div className="flex flex-col text-center ml-10 mr-10 mt-6 gap-y-6 font-montserrat font-extrabold md:flex md:flex-col md:justify-start md:text-[15px] md:font-bold lg:font-semibold lg:flex lg:w-[50rem] lg:mt-10">
        <li>
          The primary mission of our organization is to enhance the efficiency
          of daily tasks for individuals through the integration of cutting-edge
          technology. Leveraging modern technology allows us to streamline
          processes, resulting in significant savings of time, energy, water,
          electricity, and other valuable resources.
        </li>
        <li>
          Our comprehensive range of products undergoes rigorous testing at
          every stage of development to ensure optimal performance and
          reliability. Each product is meticulously crafted with the expertise
          of seasoned engineers, fostering a strong sense of trust and
          credibility between our esteemed clientele and our company.
        </li>
        <li>
          Our commitment to delivering innovative solutions is reflected in the
          meticulous design and engineering of our products.
        </li>
      </div>
    </div>
  );
};

export default WhyChooseUs;
