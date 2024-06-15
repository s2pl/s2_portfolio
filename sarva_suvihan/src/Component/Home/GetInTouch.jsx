import { DiBackbone } from "react-icons/di";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
export const GetInTouch = () => {
  return (
    <div className="min-h-[300px]">
      <h2 className="underline underline-offset-4 text-orange-500 pt-10 text-xl text-center">
        Get in Touch!
      </h2>
      <div className="md:flex justify-center items-center pt-10">
        <div className="">
          <div className="lg:flex gap-10 text-center ">
            <input
              className="p-2 my-2 mx-1 md:my-0 rounded-md bg-neutral-400 placeholder-neutral-700"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 my-2 rounded-md bg-neutral-400 placeholder-neutral-700"
              type="text"
              placeholder="Organization"
            />
          </div>
          <div className="lg:flex gap-10 md:pt-5 text-center ">
            <input
              className="p-2 my-2 mx-1 md:my-0 rounded-md bg-neutral-400 placeholder-neutral-700"
              type="text"
              placeholder="Phone"
            />
            <input
              className="p-2 my-2 rounded-md bg-neutral-400 placeholder-neutral-700"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="lg:flex my-2  items-center gap-10 md:pt-5 text-center ">
            <textarea
              className="p-2 w-60 md:pe-44 rounded-md bg-neutral-400 placeholder-neutral-700"
              type="text"
              placeholder="Your Query"
            />
            <div>
              <button className=" h-10  bg-neutral-900  text-white  px-3 rounded-md ">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="  mx-10 inline-block md:h-[250px]  md:min-h-[12px] w-0.5  self-stretch bg-neutral-600 dark:bg-bg-neutral-600"></div>
        <div className=" text-center">
          <h3 className="font-bold  text-lg">Our Coordinates:</h3>
          <div className="flex items-center justify-center content-center">
          <div className="lg:ms-16 ">
          <p className="pt-6 underline underline-offset-2 flex justify-start items-center  gap-3">
            <span>
              <FaPhoneAlt className="text-2xl" />
            </span>
            +91 91231 83988
          </p>
          <p className="pt-2 underline underline-offset-2 flex justify-start items-center gap-3 ">
            <span>
              <FaWhatsapp className="text-2xl" />
            </span>
            +91 91231 83988
          </p>
          <p className="pt-2 underline underline-offset-2 flex justify-start items-center gap-3">
            {" "}
            <span>
              <CiMail className="text-2xl" />
            </span>
            askus@sarvasuvidhaein.com
          </p>
          </div>
         
        </div>
        </div>
      </div>
    </div>
  );
};
