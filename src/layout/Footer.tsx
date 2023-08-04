const Footer = () => {
  return (
    <div className="bg-black mt-28 pt-28">
      <div className="container mx-auto px-4 mb-16 flex items-center justify-between">
        <h3 className="text-white tracking-widest text-4xl">
          Ace Mansion Studio
        </h3>
        <div className="flex items-center justify-end gap-14 ">
          <h6 className="text-white tracking-[4px]">Home</h6>
          <h6 className="text-white tracking-[4px]">About Us</h6>
          <h6 className="text-white tracking-[4px]">Portfolio</h6>
          <h6 className="text-white tracking-[4px]">Contact Us</h6>
        </div>
      </div>

      <div className="mt-10 border-t-2 border-t-gray-700 pb-14 pt-7">
        <p className="text-center text-gray-400">
          &copy; 2023 Ace Mansion Studio, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
