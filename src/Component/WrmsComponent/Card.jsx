import React from "react";
import LazyLoad from "react-lazyload";
const Card = ({ order, img, content, head }) => {
  const imageOrder = order === 1 ? "sm:order-2 md:order-1" : "sm:order-2 md:order-2";
  const textOrder = order === 1 ? "sm:order-1 md:order-2" : "sm:order-1 md:order-1";
  return (
    <>
      <div className="md:flex">
        <div
          className={`md:w-1/2 flex items-center justify-center ${imageOrder}`}
        >
          <LazyLoad height={400} className="flex items-center justify-center">
            <img src={img} className="w-[60%]" alt="" />
          </LazyLoad>
        </div>
        <div className={`md:w-1/2 flex justify-center items-center md:pt-0 pt-5 ${textOrder}`}>
          <div>
            <h3 className="font-bold mb-4">{head}</h3>
            <ul className="list-disc ml-4 mb-4">
              {content.map((cont, index) => (
                <li key={index}>
                  <span className="font-bold">{cont.subhead}</span>
                  <p className="ml-2 text-gray-600">
                    {cont.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
