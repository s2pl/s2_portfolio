import dashboard from "../static_data/wrms/dashboard.png"
import profile from "../static_data/wrms/profile.png"
import registration from "../static_data/wrms/registration.png"
import reporting from "../static_data/wrms/reporting.png"
import update_train from "../static_data/wrms/update_train.png"
import upload from "../static_data/wrms/upload.png"
import waterlevel from "../static_data/wrms/waterlevel.png"
import verification from "../static_data/wrms/verification.png"
import user_management from "../static_data/wrms/user_management.png"
export const WrmsHeader = {
    intro: {
        content : "The Water Refill Management System (WRMS) is a comprehensive web-based platform designed to streamline the water refilling process for trains. By incorporating role-based access control, real-time monitoring, and automated reporting, WRMS enhances operational efficiency for railway staff. Key users like Contractors, Supervisors, Station Managers, and Railway Admins are given specific roles and permissions to ensure smooth task management and accountability. Through features like documentation upload, train selection, and daily reporting, WRMS ensures a reliable and transparent water management process."
    },
    objective:{
        content: "The primary objective of the WRMS is to provide a digital solution that simplifies and automates the water refilling tasks for trains. It aims to:",
        lists: [
            {
                listHead:"Streamline Water Refilling Operations",
                listContent:"Improve the coordination and tracking of water filling activities for trains."
            },
            {
                listHead:"Enhance Accountability",
                listContent:"Provide visual documentation and task updates to ensure that all steps in the refilling process are completed accurately."
            },
            {
                listHead:"Facilitate Role-Based Access",
                listContent:"Assign specific roles with corresponding permissions to ensure each user interacts with the system according to their responsibilities."
            },
            {
                listHead:"Provide Real-Time Monitoring and Reporting",
                listContent:"Enable timely updates, notifications, and report generation to keep all stakeholders informed."
            }
        ]
    },
    advantage:[
        {
            head:"Enhanced Efficiency",
            headContent: "Automates the water refilling process with real-time status tracking and visual documentation uploads."
        },
        {
            head:"Role-Based Access Control",
            headContent:"Ensures that users can only access features relevant to their roles, reducing errors and increasing accountability." 
        },
        {
            head:"Improved Communication",
            headContent:"Real-time notifications and alerts keep everyone updated on task status, reducing delays in critical operations."
        },
        {
            head:"Comprehensive Reporting",
            headContent:"Allows users to generate and send daily, weekly, and monthly reports with options to include high-quality images for better transparency."
        },
        {
            head:"Customizable and Scalable",
            headContent:"The system is scalable to accommodate multiple stations and trains, with features like access to multiple stations and user role management."
        },
        {
            head:"Streamlined Task Management",
            headContent:"Supervisors can track and update task status, ensuring all refilling tasks are completed accurately and efficiently."
        }
    ]

}

export const WrmsFeatures = [
    {
        head:"User Registration and Role Assignment",
        img:registration,
        order:1,
        content: [
            {
            subhead:"Registration Form",
            content:"Collect essential details: Name, Email, Contact Number."
            },
            {
                subhead:"Role Assignment during registration",
                content:"Roles: Contractor, Supervisor, Station Manager, Railway Admin, Officer (e.g., PPTA, PNBE) for specific stations."
            },
            {
                subhead:"Permissions and Access Levels",
                content:"Define distinct permissions for each role to ensure secure and relevant access."
            }

        ]
    },
    {
        head:"User Dashboard",
        img:dashboard,
        order:2,
        content: [
            {
                subhead:"Personalized Dashboard",
                content:"Tailored interface based on user roles."
            },
            {
                subhead:"Home Page Selection",
                content:"Train Selection: Choose the train number to work on.Date Selection: Select the specific date for uploading documentation."
            },
        ]
    },
    {
        head:"Profile Management",
        img:profile,
        order:1,
        content: [
            {
                subhead:"Profile Updates",
                content:"Allow users to update personal information and change passwords."
            },
            {
                subhead:"Admin Controls",
                content:"Admin users can manage roles and permissions of other users."
            },
        ]
    },
    {
        head:"Documentation Upload and Management",
        img:upload,
        order:2,
        content: [
            {
                subhead:"Individual Coach Upload",
                content:"Upload images and videos for each coach separately."
            },
            {
                subhead:"All Coaches Upload",
                content:"Option to upload a single video encompassing all coaches."
            },
            {
                subhead:"Comments and Suggestions",
                content:"Provide a section for users to add contextual comments or observations."
            },
        ]
    },
    {
        head:"Water Level Monitoring",
        img:waterlevel,
        order:1,
        content: [
            {
                subhead:"Status Indicators",
                content:"Overflowing,Partially Filled, Fully Filled, Not Filled, NA (Not Applicable) "
            },
            {
                subhead:"NA Selection",
                content:"Indicate tasks that couldn’t be completed."
            },
        ]
    },
    {
        head:"Task Management",
        img:verification,
        order:2,
        content: [
            {
                subhead:"Mark as Completed",
                content:"Supervisors can update task status once all actions are fulfilled."
            },
            {
                subhead:"Submit Task",
                content:"Finalize the task within the system."
            },
        ]
    },
    {
        head:"Train Information Management",
        img:update_train,
        order:1,
        content: [
            {
                subhead:"Train Details",
                content:"Add train name and number."
            },
            {
                subhead:"Coach Details",
                content:"Specify and update the total number of coaches per train."
            },
            {
                subhead:"Select Train Number",
                content:"Choose the train to update."
            },
            {
                subhead:"Add/Update Coach Numbers",
                content:"Maintain accurate and up-to-date train information."
            },
        ]
    },
    {
        head:"Verification and Monitoring",
        img:verification,
        order:2,
        content: [
            {
                subhead:"Train Departure Verification",
                content:"Check the number of trains departed from a specific station on a particular date."
            },
            {
                subhead:"Water Filling Status Check",
                content:"Verify if all coaches were filled with water on the selected date."
            },
        ]
    },
    {
        head:"Reporting Features",
        img:reporting,
        order:1,
        content: [
            {
                subhead:"Report Types",
                content:"Daily, Weekly, Monthly Reports"
            },
            {
                subhead:"Report Formats",
                content:"PDF with options for high-quality or low-quality images, or without images."
            },
            {
                subhead:"Report Options",
                content:"Mail Reports & Download Reports (Daily, Weekly, Monthly (with or without images))."
            },
        ]
    },
    {
        head:"Additional Station Management (Leave Management)",
        img:user_management,
        order:2,
        content: [
            {
                subhead:"Requesting Access to Another Station",
                content:"Supervisors and Contractors can request access to another station (PNBE or PPTA) for a specified time period."
            },
            {
                subhead:"Approval Process",
                content:"Railway Admin reviews and approves or denies access requests."
            }, 
            {
                subhead:"Access Granted",
                content:"Approved users can perform tasks at the additional station during the specified period."
            },
        ]
    },
    {
        head:"Extra Features",
        img:dashboard,
        order:1,
        content: [
            {
                subhead:"Real-Time Notifications",
                content:"Alerts when water refilling tasks are due or completed."
            },
            {
                subhead:"Multi-Language Support",
                content:"Allow users to interact with the system in their preferred language."
            },
            {
                subhead:"Role-Specific Training Modules",
                content:"Provide modules to help users understand their responsibilities and navigate the platform."
            },
            {
                subhead:"Arrival Notification System",
                content:"Notify users when a train is about to arrive to prepare for water refilling."
            },
            {
                subhead:"Instant Water Filling Alerts",
                content:"Inform users of current water filling status."
            },
        ]
    },
    
]