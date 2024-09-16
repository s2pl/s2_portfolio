import React from "react";
import LazyLoad from "react-lazyload";
import Heading from "./WrmsComponent/Heading";
import webview from '../static_data/railmadad/railmadad_webview.png'
import phoneview from '../static_data/railmadad/mobileview.png'
import Card from "./WrmsComponent/Card";
import {WrmsFeatures} from "../static_data/index.jsx"


const Wrms = () => {
   
  return (
    <div className="w-full min-h-[100vh] mt-10 mx-3 md:px-12 lg:px-32">
      <Heading/>
      <section className="">
          <h3 className="">Interface: Web & App</h3>
          <div className="md:flex items-center justify-center py-5">
            <div className="md:w-1/3 flex justify-center">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img src={phoneview} className="" alt="" />
              </LazyLoad>
            </div>
            <div className="md:w-2/3">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img src={webview} className="w-[80%]" alt="" />
              </LazyLoad>
            </div>
          </div>
    </section>
    <section className="">
    <h2 className="py-5 ">Features:</h2>
    {WrmsFeatures.map((feature,index)=> (
      <Card key={index} content={feature.content} head={feature.head} img={feature.img} order={feature.order} />
    ))}
    </section>
    <section className="md:flex justify-center items-center pt-5">
          <div className="lg:w-[50%] px-3 ">
            <h2 className="py-2 text-center text-3xl">
              Download WRMS Today
            </h2>
            <div className="text-center w-full">
              <p className="text-lg ">
              Simplify your water refill operations with real-time monitoring, easy task management, and detailed reporting. Streamline the entire process with our user-friendly platform and ensure every train is ready for its journey!
              </p>
            </div>

            <div className="py-5 text-center">
              <p className="text-lg pt-2">
                <span className="font-bold">Website: </span>{" "}
                <a
                  href="https://wrms.suvidhaen.com/"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                wrms.suvidhaen.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-bold">App: </span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.suvidhaen.wrms.app"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  WRMS App or Jal Sampan App
                </a>
              </p>
              <p className="text-lg">
                <span className="font-bold">Information: </span>
                <a
                  href="https://www.youtube.com/watch?v=RdbqMY_rA8k&list=PLPXLxMmLRj-IToSMknV0iFVFSEdrpA0v4"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  Youtube Video
                </a>
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Wrms;
