import { partners } from "../../constants";
export const Partners = () => {
  return (
    <div className="min-h-[180px] md:flex  items-center justify-center">
      <div className="mr-8 font-bold text-md text-center py-5 md:pt-0">Our Partners-</div>
      {partners.map((partner, index) => (
        <div key={index} className="md:mx-10   flex justify-center items-center">
          <div className="py-2 ">
          <img src={partner.img} width={100} alt="" />
          <p className="text-sm pt-1">{partner.name}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};
