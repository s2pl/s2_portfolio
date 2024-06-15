export const Testimonials = () => {
    return (
        <div className="min-h-[300px]\ ">
        <h2 className="underline underline-offset-4 text-orange-500 pt-10 text-xl text-center">
         Testimonials
        </h2>
        <div className="pt-10 md:flex justify-center ">
        <div className="flex justify-center items-center border rounded-md  m-10 shadow-md ">
            <div className="flex justify-center items-center">
                <img src="images/process.jpg" className="rounded-s-md w-[150px]" alt="" />
            </div>
            <div className="m-7">
                <h3 className="font-bold text-xl">Comment from Clinet XYZ</h3>
                <p className="text-md">Ayush Kumar</p>
                <p className="text-lg">Projecta</p>
            </div>
        </div>
        <div className="flex justify-center items-center border rounded-md  m-10 shadow-md ">
            <div className="flex justify-center items-center">
                <img src="images/process.jpg" className="rounded-s-md w-[150px]"  alt="" />
            </div>
            <div className="m-7">
                <h3 className="font-bold text-xl">Comment from Clinet ZYX</h3>
                <p className="text-md">Ayushi Kumari</p>
                <p className="text-lg">Projecti</p>
            </div>
        </div>
        </div>
        
        </div>
    )
}