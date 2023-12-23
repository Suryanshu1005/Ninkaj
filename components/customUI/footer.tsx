const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-y-2 bg-black text-white font-montserrat">
      <div className="mt-4 ml-4 mr-4">
        <p className="font-semibold">
          © NINKAJ ELECTRONICS 2023 <br />
          <span className="text-[12px] font-sans underline underline-offset-2">
            Trademarks and brands are the property of their respective owners.
          </span>
        </p>
      </div>
      <div className="mb-4">
        <p>Designed by: - Suryanshu Tiwari</p>
      </div>
    </div>
  );
};

export default Footer;
