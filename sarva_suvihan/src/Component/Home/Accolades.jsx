export const Accolades = () => {
    return (
        <div className="min-h-[300px]">
        <h2 className="underline underline-offset-4 text-orange-500 pt-10 text-xl text-center">
         Accolades
        </h2>
        <div className="pt-10 md:flex justify-center ">
        <div className="md:flex justify-center items-center border rounded-md  m-10 shadow-md ">
            <div className="flex justify-center items-center">
                <img src="process.jpg" className="rounded-s-md" width={200} alt="" />
            </div>
            <div className="m-7">
               <p className="text-md md:w-96">In 2023, we were chosen the Best IT Startup from Bihar by the Bihar State Govt for our contribution to good governance with our focus on automation of government data.</p>
            </div>
        </div>
        </div>
        </div>
    )
}