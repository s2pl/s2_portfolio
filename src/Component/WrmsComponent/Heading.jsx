import React from "react";
import VideoCard from "../VideoCard";
import { WrmsHeader } from "../../static_data";
const Heading = () => {
  const {intro,objective,advantage} = WrmsHeader
  const objectiveLists = objective.lists
  const embedID = "RdbqMY_rA8k";
  return (
    <>
      <section className="">
        <h2 className="text-center md:text-3xl text-2xl">
          <span className="font-bold">WRMS</span> - Water Refill Management
          System
        </h2>
        <p className="lg: text-center m-auto text-lg py-2 w-[80%]">
          Empowering Railway Operations with Seamless Water Management
        </p>
      </section>
      <section className="flex justify-center">
        <VideoCard embedId={embedID} />
      </section>
      <section className="py-10">
        <div className="className=" py-2>
          <h3 className="pb-2">Introduction</h3>
          <p className="text-lg">
            {intro.content}
          </p>
        </div>
        <div className="py-2">
          <h3 className="pb-2">Objective</h3>
          <p className="text-lg">
           {objective.content}
          </p>
          <ul className="list-disc pl-8 text-lg pt-2">
            {objectiveLists.map((list, index)=> {
              return <li key={index}>
                <span className="font-bold">
                 {list.listHead}{" : "}
                </span>
                {list.listContent}
              </li>
            })}
          
          </ul>
        </div>
        <div className="pt-2">
          <h3 className="pb-2">Advantages</h3>
          <ul className="list-disc pl-8 text-lg">
          {advantage.map((list, index)=> {
              return <li key={index}>
                <span className="font-bold">
                 {list.head}{" : "}
                </span>
                {list.headContent}
              </li>
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Heading;
