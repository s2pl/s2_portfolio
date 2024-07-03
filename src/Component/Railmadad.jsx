import React from "react";
import LazyLoad from "react-lazyload";
import { ScrollRestoration } from "react-router-dom";
import webview from '../static_data/railmadad/railmadad_webview.png'
import phoneview from '../static_data/railmadad/mobileview.png'
import udc from '../static_data/railmadad/udc.png'
import an from '../static_data/railmadad/an.png'
import feed from '../static_data/railmadad/feedback.png'
import sqt from '../static_data/railmadad/sqt.png'
import pm from '../static_data/railmadad/pm.png'
import um from '../static_data/railmadad/um.png'
import VideoCard from "./VideoCard";
const Railmadad = () => {
  const embedId = "lGcFWinJA1U"
  return (
      <div className="min-h-[100vh]  my-12 max-w-full mx-3 md:px-12 lg:px-32 ">
        <section className="">
          <h2 className="text-center md:text-3xl text-2xl">
            <span className="font-bold">RailMadad Analytics</span> - Enhancing
            Customer Experience through Data
          </h2>
          <p className="lg: text-center m-auto text-lg py-2 w-[80%]">
          RailMadad Analytics enhances Indian Railways with data-driven insights to boost passenger satisfaction, streamline operations, and improve service quality.
          </p>
        </section>
        <section className="flex justify-center">
          <VideoCard embedId={embedId}/>
        </section>
        <section className="py-10">
          <div className="className=" py-2>
            <h3 className="pb-2">Introduction</h3>
            <p className="text-lg">
              RailMadad Analytics is a digital platform transforming how Indian
              Railways gathers and utilizes passenger feedback. It integrates
              data from multiple sources to provide deep insights into service
              quality, enabling informed decision-making for enhancing passenger
              satisfaction.
            </p>
          </div>
          <div className="py-2">
            <h3 className="pb-2">Objective</h3>
            <p className="text-lg">
              RailMadad Analytics project is to leverage advanced data
              collection, analysis, and visualization tools to enhance service
              quality and customer satisfaction across the Indian Railways
              network through informed decision-making and continuous
              improvement initiatives.
            </p>
          </div>
          <div className="pt-2">
            <h3 className="pb-2">Advantages</h3>
            <ul className="list-disc pl-8 text-lg">
              <li>
                <span className="font-bold">
                  Comprehensive Feedback Integration:
                </span>{" "}
                Centralizes feedback from multiple sources (online forms, mobile
                apps, paper surveys) into a single platform, ensuring all data
                is easily accessible and manageable.
              </li>
              <li>
                <span className="font-bold">Advanced Data Analysis:</span>{" "}
                Utilizes smart analytics to convert complex feedback data into
                clear insights, enabling railway authorities to identify trends,
                patterns, and areas needing improvement efficiently.
              </li>
              <li>
                <span className="font-bold">Enhanced Decision-Making:</span>{" "}
                Provides actionable information and performance metrics that
                empower railway managers to make informed decisions on resource
                allocation and service improvements..
              </li>
              <li>
                <span className="font-bold">User-Friendly Interface:</span>{" "}
                Offers intuitive data visualization tools such as charts and
                graphs, making it accessible for non-technical users to
                interpret and act upon feedback data effectively.
              </li>
              <li>
                <span className="font-bold">
                  Scalability and Continual Improvement:
                </span>{" "}
                Designed to scale across the entire Indian Railways network,
                with provisions for regular updates and enhancements based on
                ongoing feedback and evolving requirements.
              </li>
            </ul>
          </div>
        </section>
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
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={udc}
                  className=" lg:w-[80%] md: h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">
                  Unified Data Collection:
                </h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Gathering Feedback:</span>
                    <p className="ml-2 text-gray-600">
                      Collect feedback from passengers through various channels,
                      like online forms, mobile apps, and even paper surveys.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">One-Stop Data Hub:</span>
                    <p className="ml-2 text-gray-600">
                      Store all this feedback in one central place, making it
                      easy for you to view and manage.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center md:order-1">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={an}
                  className="lg:w-[80%] md: h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">Analytical Engine:</h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Smart Analysis:</span>
                    <p className="ml-2 text-gray-600">
                      Use advanced technology to analyze the feedback data.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Easy-to-Understand Reports:
                    </span>
                    <p className="ml-2 text-gray-600">
                      Convert complex data into simple charts and graphs that
                      highlight important trends and patterns.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center ">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={feed}
                  className=" lg:w-[80%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">Feedback Analysis:</h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Detailed Breakdown:</span>
                    <p className="ml-2 text-gray-600">
                      Analyze the feedback to show patterns over time, like how
                      many complaints were received each month.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Visual Representation:</span>
                    <p className="ml-2 text-gray-600">
                      See feedback as easy-to-read charts, like pie charts and
                      bar graphs, showing different types of complaints and
                      their frequency.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center md:order-1">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={sqt}
                  className=" lg:w-[80%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">
                  Service Quality Tracking:
                </h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Multiple Dimensions:</span>
                    <p className="ml-2 text-gray-600">
                      Track various aspects of service, such as cleanliness,
                      punctuality, and staff behavior.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Performance Overview:</span>
                    <p className="ml-2 text-gray-600">
                      Get a clear picture of how well each service area is
                      performing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center ">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={um}
                  className=" lg:w-[80%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">User Management:</h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Add and Manage Users:</span>
                    <p className="ml-2 text-gray-600">
                      Admins can add new users and control what they can see and
                      do.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Secure Access:</span>
                    <p className="ml-2 text-gray-600">
                      Ensure that only authorized personnel can access sensitive
                      information.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center md:order-1">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={feed}
                  className=" lg:w-[80%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">Data Visualization:</h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Visual Tools:</span>
                    <p className="ml-2 text-gray-600">
                      Turn data into visual formats like graphs and charts.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Downloadable Content:</span>
                    <p className="ml-2 text-gray-600">
                      Easily download visuals for presentations or reports.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center ">
              <LazyLoad
                height={400}
                className="flex items-center justify-center"
              >
                <img
                  src={pm}
                  className=" lg:w-[80%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <div>
                <h3 className="font-bold mb-4">
                  Performance Metrics:
                </h3>
                <ul className="list-disc ml-4 mb-4">
                  <li>
                    <span className="font-bold">Track Resolution Times:</span>
                    <p className="ml-2 text-gray-600">
                      Measure how quickly complaints are resolved.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Identify Top Performers:</span>
                    <p className="ml-2 text-gray-600">
                      Highlight staff members who are excelling in their duties.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>

            <h3 className="font-bold mb-4 md:py-5">How to Use </h3>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">
                Data Collection and Upload:
              </h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Download Data:</span> Regularly
                  download passenger feedback data from the ad system. Ensures
                  the system always has the latest information for analysis.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Upload Data:</span> Upload this
                  data to the RailMadad Analytics system to kep-to-date. Ensures
                  the system always has the latest information for analysis.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">
                Data Analysis and Visualization:
              </h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Analyze Data:</span> Use the
                  analytical engine to process and analyze the uploaded d Helps
                  quickly identify problem areas and understand overall service
                  performance.
                </li>
                <li className="mt-2">
                  <span className="font-bold">View Visuals:</span> Check the
                  charts and graphs to understand feedback tre Helps quickly
                  identify problem areas and understand overall service
                  performance.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">
                User Onboarding and Management:
              </h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Add Users:</span> Admins can add
                  new users who need access to tem. Ensures the right people
                  have access and can use the system effectively.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Set Permissions:</span> Define
                  what each user can see and do based on ole. Ensures the right
                  people have access and can use the system effectively.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">Feedback Analysis:</h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Select Filters:</span> Choose
                  filters like train number, coach number, and date range to
                  narrow down the feedback. akes it easy to focus on specific
                  areas of interest and understand passenger feedback in detail.
                </li>
                <li className="mt-2">
                  <span className="font-bold">View Analysis:</span> Look at the
                  interactive charts and graphs that show feedback patterns.
                  akes it easy to focus on specific areas of interest and
                  understand passenger feedback in detail.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">Performance Tracking:</h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Monitor Complaints:</span> Track
                  how quickly and effectively complaints are being resolved.
                  Helps in improving the response to passenger complaints and
                  enhancing overall service quality.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Identify Trends:</span> Look for
                  patterns in the data to identify staff or services that are
                  performing well or poorly. Helps in improving the response to
                  passenger complaints and enhancing overall service quality.
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <h3 className="text-xl font-bold mb-2">Report Generation:</h3>
              <ul className="list-disc ml-8">
                <li>
                  <span className="font-bold">Generate Reports:</span> Use the
                  system to create detailed reports on various metri Provides
                  comprehensive documentation of service performance and areas
                  for improvement.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Download Reports:</span> Download
                  these reports for offline analysis or sharing with othe
                  Provides comprehensive documentation of service performance
                  and areas for improvement.
                </li>
              </ul>
          </div>
        </section>
        <section className="my-10">
          <h2 className="text-center">Visit for more !</h2>
          <div className="mx-auto text-center">
            <div className="py-5 text-lg flex-wrap ">
              <p>
                <span className="font-bold">Website:</span>{" "}
                <a
                  rel="stylesheet"
                  href="https://s2analytica.suvidhaen.com/auth/selector/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  s2analytica.suvidhaen.com
                </a>
              </p>
              <p>
                <span className="font-bold">Application:</span>{" "}
                <a
                  rel="stylesheet"
                  href="#"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Railmadad Analytica{" "}
                </a>
              </p>
              <p>
                <span className="font-bold">Infromation:</span>{" "}
                <a
                  rel="stylesheet"
                  href="#"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Youtube Videos
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Railmadad;
