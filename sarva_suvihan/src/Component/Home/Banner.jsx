export const Banner = () => {
  return (
    <div className="min-h-[300px]  bg-cover  "
    style={{ 
      backgroundImage: `url("images/ux-indonesia.jpg")` 
    }}>
      <div className="py-14  flex items-center justify-center  inset-0 bg-white opacity-80 ">
      <div className=" mx-5 md:mx-10 flex-wrap justify-center items-center ">
        <h2 className="text-xl mb-2">Efficiency through Technology</h2>
        <h2 className="text-xl font-bold mb-2 ">Accelerate your Growth <br/> with our End-to-End Automation Solutions</h2>
        <p className="text-md w-4/5 mb-3 ">
          We build process automation with seamless integration for optimizing
          performance Build with us to realize your full organizational
          potential.
        </p>
        <button className="text-white bg-neutral-950 px-3 py-1  border border-gray-100">Learn more</button>
      </div>
      </div>
     
    </div>
  );
};
