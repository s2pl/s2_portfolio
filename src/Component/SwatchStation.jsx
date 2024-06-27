import React from "react";
import phoneview from "../static_data/swatchstation/phoneview.png";
import webview from "../static_data/swatchstation/webview.png";
import chi1 from "../static_data/swatchstation/chi1.png";
import atc from "../static_data/swatchstation/atc.png";
import aro from "../static_data/swatchstation/aro.png";
import asm from "../static_data/swatchstation/asm.png";
import LazyLoad from "react-lazyload";
const swatchstation = () => {
  return (
    <>
      <div className="min-h-[100vh]  my-12 max-w-full mx-3 md:px-12 lg:px-32 ">
        <section className="">
          <h2 className="text-center md:text-3xl text-2xl">
            <span className="font-bold">Swachh DNR</span> - Digital Monitoring
            tool of Station Cleanliness
          </h2>
          <p className="lg:w-[70%] text-center m-auto text-lg py-2">
            Our integrated platform, available as a website and mobile app,
            simplifies employee performance management at Patna and Danapur
            Junction. It offers an efficient and user-friendly solution for
            tracking and assessing performance records.
          </p>
        </section>
        <section className="py-10">
          <div className="className=" py-2>
            <h3 className="pb-2">Introduction</h3>
            <p className="text-lg">
              The Swachh DNR Tool is a digital solution introduced by the EnHM
              wing in the Danapur division for monitoring station cleanliness.
              It replaces the traditional manual contract monitoring system,
              providing a more efficient and transparent way to ensure
              cleanliness at railway stations.
            </p>
          </div>
          <div className="py-2">
            <h3 className="pb-2">Objective</h3>
            <p className="text-lg">
              The primary goal of the Swachh DNR Tool is to facilitate the
              monitoring of scheduled cleaning activities through a mobile
              application. The app, compatible with both Android and iOS
              platforms, allows Railway authorities to maintain records of
              daily, weekly, and monthly scores, penalties, passenger feedback,
              and geotagged photographs.
            </p>
          </div>
          <div className="pt-2">
            <h3 className="pb-2">Advantages</h3>
            <ul className="list-disc pl-8 text-lg">
              <li>
                <span className="font-bold">Real-Time Remote Monitoring:</span>{" "}
                Allows officials to oversee station cleanliness remotely.
              </li>
              <li>
                <span className="font-bold">Quality Assurance:</span> Ensures
                quality through geotagged photos.
              </li>
              <li>
                <span className="font-bold">Paperless System:</span> Reduces
                paper usage significantly.
              </li>
              <li>
                <span className="font-bold">Accessible Documentation:</span>{" "}
                Documentation can be accessed anytime, anywhere.
              </li>
              <li>
                <span className="font-bold">Easy Access to Reports:</span>{" "}
                Previous reports are readily available.
              </li>
              <li>
                <span className="font-bold">
                  Reduction of Manual Data Entry:
                </span>{" "}
                Eliminates the need for manual logbook entries.
              </li>
              <li>
                <span className="font-bold">
                  Increased Operational Efficiencies:
                </span>{" "}
                Faster data access and analysis with built-in graphs.
              </li>
            </ul>
          </div>
        </section>
        <section className="">
          <h3 className="">Interface: Web & App</h3>
          <div className="md:flex items-center justify-center py-5">
            <div className="md:w-1/3 flex justify-center">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img src={phoneview} className="w-[70%]" alt="" />
              </LazyLoad>
            </div>
            <div className="md:w-2/3">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img src={webview} alt="" />
              </LazyLoad>
            </div>
          </div>
        </section>
        <section className="">
          <h3 className="md:py-5">Features:</h3>
          <h3 className="text-center py-5 font-bold">Access to CHI</h3>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center">
              <LazyLoad height={400} className="flex items-center justify-center" >
                <img
                  src={chi1}
                  className="w-[60%] lg:w-[50%] md:w-[70%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">
                    Upload Images & Add Star Ratings:
                  </span>{" "}
                  Mandatory images for ratings, with comments for ratings of
                  0-2.
                </li>
                <li>
                  <span className="font-bold">
                    Non-Daily Task Configurations:
                  </span>{" "}
                  Allows configuration of tasks scheduled less frequently.
                </li>
                <li>
                  <span className="font-bold">Passenger Feedback:</span>{" "}
                  Collects feedback with digital signatures via email OTP.
                </li>
                <li>
                  <span className="font-bold">Inspection Feedback:</span>{" "}
                  Entered by CHI on behalf of inspecting officers.
                </li>
                <li>
                  <span className="font-bold">Digital Signatures by CHI:</span>{" "}
                  On daily, weekly, and monthly reports.
                </li>
                <li>
                  <span className="font-bold">Download/Email Reports:</span>{" "}
                  Various report types can be downloaded or emailed.
                </li>
                <li>
                  <span className="font-bold">
                    Monthly Reports for Billing:
                  </span>{" "}
                  Automatic calculation of deductions and penalties.
                </li>
                <li>
                  <span className="font-bold">Monitoring Stations:</span> CHI at
                  HQ monitors smaller stations.
                </li>
                <li>
                  <span className="font-bold">Leave Management:</span> CHI can
                  manage leave and additional charge requests.
                </li>
                <li>
                  <span className="font-bold">Station Transfers:</span> CHI can
                  request transfers, managed by the railway admin.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-center py-5 font-bold">Access to Contractors</h3>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center md:order-1">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img
                  src={atc}
                  className="w-[60%] lg:w-[50%] md:w-[70%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">
                    Upload Images & Add Comments:
                  </span>{" "}
                  Contractors can upload images and add comments.
                </li>
                <li>
                  <span className="font-bold">
                    Digital Signatures by Contractor:
                  </span>{" "}
                  On daily and monthly reports.
                </li>
                <li>
                  <span className="font-bold">Download/Email Reports:</span>{" "}
                  Various report types can be downloaded or emailed.
                </li>
                <li>
                  <span className="font-bold">
                    Monthly Reports for Billing:
                  </span>{" "}
                  Automatic calculation of deductions and penalties.
                </li>
                <li>
                  <span className="font-bold">Additional Stations:</span>{" "}
                  Supervisors can work at multiple stations.
                </li>
                <li>
                  <span className="font-bold">Station Change Requests:</span>{" "}
                  Supervisors can request station changes.
                </li>
                <li>
                  <span className="font-bold">Transfers:</span> Contractors can
                  request transfers, managed by the railway admin.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-center py-5 font-bold">
            Access to Railway Officer
          </h3>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center ">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img
                  src={aro}
                  className="w-[70%] lg:w-[50%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">Real-Time Monitoring:</span>{" "}
                  Monitor stations and view images and ratings.
                </li>
                <li>
                  <span className="font-bold">Complaint Monitoring:</span>{" "}
                  Monitor and get daily consolidated reports.
                </li>
                <li>
                  <span className="font-bold">Download/Email Reports:</span>{" "}
                  Various report types can be downloaded or emailed.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-center py-5 font-bold">
            Access to Station Manager / Station Superintendent
          </h3>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center md:order-1">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img
                  src={asm}
                  className="w-[70%] lg:w-[50%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center md:pt-0 pt-5">
              <ul class="list-disc list-inside">
                <li>
                  <strong>Logbook Access:</strong> Fill logbooks at stations
                  without EnHM supervisors.
                </li>
                <li>
                  <strong>Download Complaint Reports:</strong> Download reports
                  with images.
                </li>
                <li>
                  <strong>Raise Complaints:</strong> Raise complaints about
                  station deficiencies.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-center py-5 font-bold">
            Access to Railway Administrator
          </h3>
          <div className="md:flex">
            <div className="md:w-1/2 flex items-center justify-center ">
              <LazyLoad height={400} className="flex items-center justify-center">
                <img
                  src={asm}
                  className="w-[70%] lg:w-[50%] md:w-[80%] h-[90%]"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="md:w-1/2 flex justify-center items-center  md:pt-0 pt-5">
              <ul class="list-disc list-inside">
                <li>
                  <strong>User Onboarding Requests:</strong> Accept or reject
                  onboarding requests.
                </li>
                <li>
                  <strong>Leave Requests:</strong> Manage leave requests.
                </li>
                <li>
                  <strong>Transfer Requests:</strong> Manage transfer requests.
                </li>
                <li>
                  <strong>Additional Station Requests:</strong> Manage
                  additional station requests.
                </li>
                <li>
                  <strong>Grant Leave Access:</strong> Give leave access for
                  specific durations.
                </li>
                <li>
                  <strong>Grant Transfer Access:</strong> Give transfer access.
                </li>
              </ul>
            </div>
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
                  href="https://cms.suvidhaen.com/"
                  className="text-blue-600 hover:underline"
                >
                  www.cms.suvidhaen.com
                </a>
              </p>
              <p>
                <span className="font-bold">Application:</span>{" "}
                <a
                  rel="stylesheet"
                  href="https://play.google.com/store/apps/details?id=com.cms.android.cleaningmanagementsystem.app"
                  className="text-blue-600 hover:underline"
                >
                  SwatchDNR App{" "}
                </a>
              </p>
              <p>
                <span className="font-bold">Infromation:</span>{" "}
                <a
                  rel="stylesheet"
                  href="https://www.youtube.com/playlist?list=PLPXLxMmLRj-Ia_sqcsx6DGK__88I0SIUc"
                  className="text-blue-600 hover:underline"
                >
                  Youtube Videos
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default swatchstation;
