import { whowearelist } from "../../constants";

export const WhoWeAre = () => {
  return (
    <div className="min-h-[200px] md:flex items-center justify-center">
      <div className=" md:w-2/5">
        <h1 className="text-orange-500 text-lg pt-4 font-bold mx-2">Who We Are:</h1>
        <ul className="md:ms-3 px-4 w-full">
            {whowearelist.map((li,index) => (

                <li className="py-3">{li.list}</li>
            ))}
        </ul>
      </div>
      <div className="md:w-2/5 flex justify-center items-center">
      <img src="images/who.jpg" width={400} alt="" />
      </div>
    </div>
  );
};
