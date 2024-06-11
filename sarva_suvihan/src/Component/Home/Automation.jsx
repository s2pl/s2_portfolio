import { automation  } from "../../constants";
import { Card } from "./Card";
export const Automation = () => {
  return (
    <div className="min-h-[400px] ">
      <h1 className="underline underline-offset-4 text-orange-500 pt-10 text-xl text-center">
      A Rigorous Approach to Automation
      </h1>
      <div className="flex justify-center items-center py-10 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 place-content-center place-items-center gap-3 w-[80%]  ">
        {automation.map((sol, index) => (
          <Card key={index} desc={sol.desc} heading={sol.head} img={sol.img} />
        ))}
      </div>
      </div>
    </div>
  );
};
