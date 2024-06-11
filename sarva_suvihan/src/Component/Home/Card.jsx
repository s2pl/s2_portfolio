export const Card = ({ img, heading, desc }) => {
  return (
    <div className="p-5  rounded-xl shadow-2xl  px-4 ">
      <div className="flex justify-center items-center">
        <img src={img} width={180} alt="" />
      </div>
      <div className="text-center pb-2">
        <h3 className="underline underline-offset-1 pt-1 text-black font-bold">
          {heading}
        </h3>
        <p className="md:w-72 pt-2 text-center text-neutral-900">{desc} </p>
      </div>
    </div>
  );
};
