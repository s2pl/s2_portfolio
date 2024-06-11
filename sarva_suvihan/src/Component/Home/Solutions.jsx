import { solutions } from "../../constants"
import { Card } from "./Card"

export const Solutions = () => {
    return (
        <div className="min-h-[400px] ">
        <h1 className="underline underline-offset-4 text-orange-500 pt-10 text-xl text-center mx-20">Our Solutions</h1>
        <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 place-content-center place-items-center gap-3 w-[80%] ">
       {solutions.map((sol, index) => (
        <Card key={index} desc={sol.desc} heading={sol.head} img={sol.img}/>
       ))}
        </div>
  
        </div>
      
      </div>
    )
}