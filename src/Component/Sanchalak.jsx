import React from "react";
import search from "../static_data/sanchalak/search.png";
import fetchtrain from "../static_data/sanchalak/fetchtrain.png";
import profile from "../static_data/sanchalak/profile.png";
import signup from "../static_data/sanchalak/signup.png";

const Sanchalak = () => {
  return (
    <>
      <div className="w-full min-h-[100vh mt-10">
        <section className="px:2">
          <h2 className="text-center pt-10 md:text-3xl text-xl">
            Sanchalak: Your Comprehensive Train Travel App
          </h2>
          <p className="text-center py-2 text-lg px-2 ">
            Sanchalak is designed and developed to enhance and streamline your
            train travel experience.{" "}
          </p>
        </section>
        <section className="py-5">
          <h2 className=" md:text-xl text-lg  text-center px-2">
            Here’s a detailed look at its features and how to get started:
          </h2>
        </section>
        <section className="border min-h-[300px] md:px-20 px-2">
          <div className="md:flex  justify-center items-center py-5">
            <div className="flex md:w-1/2 justify-center items-center">
              <img className="lg:w-[30%] w-[50%]" src={signup} alt="" />
            </div>
            <div className="md:w-1/2 px-2 md:px-0">
              <h3 className="py-3">Getting Started</h3>
              <p className="text-lg">
                <span className="font-bold">1. Download the App:</span>{" "}
                Available on major app stores.
              </p>
              <p className="lg:w-[60%] text-lg">
                <span className="font-bold">2. Create an Account:</span>{" "}
                Register with your details or use the Google sign-in option for
                quick access.{" "}
              </p>
              <p className="text-lg">
                <span className="font-bold">3. Login: </span>
                Use your credentials to access the app.
              </p>
            </div>
          </div>
          <div className="md:flex justify-center items-center py-5 ">
            <div className="flex md:w-1/2 justify-center items-center order-1 ">
              <img className="lg:w-[30%] w-[50%]" src={search} alt="" />
            </div>
            <div className="md:w-1/2 flex ">
              <div className="lg:pl-20 md:pl-10 sm:px-2 ">
                <div className="flex justify-center items-center">
                  <div className="lg:w-[60%] px-2 md:px-0">
                    <h3 className="py-3">Train Details:</h3>
                    <p className="text-lg ">
                      <span className="font-bold">
                        1. Passenger and Berth Information:{" "}
                      </span>{" "}
                      View detailed information about passengers and berths for
                      selected trains.
                    </p>
                    <p className=" text-lg">
                      <span className="font-bold">
                        2. Download and Email Options:
                      </span>
                      Easily download or email the details for convenience.{" "}
                    </p>
                    <p className="text-lg">
                      <span className="font-bold">3. How to Use:</span>
                      <ol className="ml-8 list-disc">
                        <li>Click on "Train Details".</li>
                        <li>Fill in the required details.</li>
                        <li>Download the berth information</li>
                      </ol>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center items-center py-5">
            <div className="flex md:w-1/2 justify-center items-center">
              <img className="lg:w-[30%] w-[50%]" src={fetchtrain} alt="" />
            </div>
            <div className="md:w-1/2 px-2">
              <h3 className="py-3">See My Train:</h3>
              <p className="lg:w-[70%] text-lg">
                <span className="font-bold">
                  1. Real-Time Location Tracking:{" "}
                </span>
                Display your current location and nearby stations within a 10 km
                radius along the train route.{" "}
              </p>
              <p className="md:w-[60%]  text-lg">
                <span className="font-bold">2. How to Use:</span>
                <ol className="ml-8 list-disc">
                  <li>Click on "See My Train".</li>
                  <li>Fill in the required details.</li>
                  <li>View your location and nearby stations.</li>
                </ol>
              </p>
            </div>
          </div>
          <div className="md:flex justify-center items-center my-10">
            <div className="flex md:w-1/2 justify-center items-center order-1">
              <img className="lg:w-[30%] w-[50%]" src={profile} alt="" />
            </div>
            <div className="md:w-1/2 lg:pl-20 md:pl-10 ">
              <div className="md:flex justify-center items-center">
                <div className="lg:w-[60%] md:px-0 px-2">
                  <h3 className="py-3">User Profile Management</h3>
                  <p className="text-lg ">
                    <span className="font-bold">1. Profile Updates: </span>
                    <ol className="ml-8 list-disc">
                      <li>Change your password.</li>
                      <li>Update your phone number.</li>
                      <li>Change your email address.</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="flex justify-center items-center my-10">
            <div>
              <h2 className="py-3 text-center text-3xl">
                Benefits of Sanchalak
              </h2>
              <ul className="text-lg px-3 md:px-0">
                <li>
                  <span className="font-bold">Convenience: </span> Manage your
                  travel details and preferences in one place.
                </li>
                <li>
                  <span className="font-bold">Efficiency: </span>Quick access to
                  essential information and options to save or share them.
                </li>
                <li>
                  <span className="font-bold">User-Friendly: </span>Simple
                  navigation and intuitive design make it easy to use for all
                  age groups
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="md:flex justify-center items-center">
          <div className="lg:w-[50%] px-3 ">
            <h2 className="py-2 text-center text-3xl">
              Download Sanchalak Today
            </h2>
            <div className="text-center w-full">
              <p className="text-lg ">
                Simplify your train journeys with real-time tracking, detailed
                passenger and berth information, and easy profile management.
                Enjoy a seamless travel experience with our user-friendly app.!
              </p>
            </div>

            <div className="py-5 text-center">
              <p className="text-lg pt-2">
                <span className="font-bold">Website: </span>{" "}
                <a
                  href="https://sanchalak.suvidhaen.com/"
                  className="text-blue-600 underline"
                >
                  www.sanchalak.suvidhaen.com
                </a>
              </p>
              <p className="text-lg">
                <span className="font-bold">App: </span>
                <a
                  href="https://sanchalak.suvidhaen.com/"
                  className="text-blue-600 underline"
                >
                  Sanchalak App
                </a>
              </p>
              <p className="text-lg">
                <span className="font-bold">Information: </span>
                <a
                  href="https://www.youtube.com/watch?v=xVjd5dTjzT4&list=PLPXLxMmLRj-IuWl-8p4b-oS63m5kw9HQD"
                  className="text-blue-600 underline"
                >
                  Youtube Video
                </a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-center items-center my-10">
            <div className="">
              <h2 className="py-2">Contact and Support</h2>
              <p className="px-1">For any assistance, you can reach us at:</p>
              <ul className="text-xl px-2 py-2">
                <li>
                  <span className="font-bold">Phone: </span>+ 91 99554 81699
                </li>
                <li>
                  <span className="font-bold">Website: </span>www.suvidhaen.com
                </li>
                <li>
                  <span className="font-bold">Address: </span>Patna, Bihar
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sanchalak;
