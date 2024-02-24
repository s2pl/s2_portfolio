import React from 'react'
import './component.css'
const ApplyForm = () => {

    return (
        <div >

            <div className="container " >
                <div className="row my-4">
                    <div className="col-lg-10 mx-auto">
                        <div
                            className="card border-0 "
                            style={{boxShadow:"14px 14px 14px 14px rgba(0, 0, 0, 0.279)"}}
                        >
                            <div className="card-body">
                                <h2 className="text-center">
                                    Job Application
                                </h2>
                                <p className='text-center'>Please complete the form below to apply for a position with us.</p>
                                <div className='border-2'>

                                </div>
                                <form action="" method="get" id="request-send">
                                    <div className="row mt-3 ">
                                        <label for="name" className="small bold"> Full name</label>
                                        <div className="col-lg-3 mb-3 ">

                                            <input
                                                type="text"
                                                name="fname"
                                                id="name"
                                                className="form-control"
                                            />
                                            <label for="name" className="small"> first Name</label>

                                        </div>
                                        <div className="col-lg-3 mb-3">

                                            <input
                                                type="text"
                                                name="fname"
                                                id="name"
                                                className="form-control"
                                            /><label for="name" className="small">middle Name</label>
                                        </div>
                                        <div className="col-lg-3 mb-3">

                                            <input
                                                type="text"
                                                name="fname"
                                                id="name"
                                                className="form-control"
                                            /><label for="name" className="small">last Name</label>
                                        </div>
                                        <div className="row mt-3">
                                            <label for="name" className="small bold"> Birth Date</label>
                                            <div className="col-lg-3 mb-3 ">

                                                <input
                                                    type="text"
                                                    name="fname"
                                                    id="name"
                                                    className="form-control"
                                                />    <label for="name" className="small"> Month </label>
                                            </div>
                                            <div className="col-lg-3 mb-3">

                                                <input
                                                    type="text"
                                                    name="fname"
                                                    id="name"
                                                    className="form-control"
                                                /><label for="name" className="small"> Day</label>
                                            </div>
                                            <div className="col-lg-3 mb-3">

                                                <input
                                                    type="text"
                                                    name="fname"
                                                    id="name"
                                                    className="form-control"
                                                />
                                                <label for="name" className="small"> Year</label>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label for="email" className="small bold">Current Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                            />
                                            <label for="email" className="small">Street Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                            />
                                            <label for="email" className="small">Street Address Line 2</label>
                                            <div className="row mt-2">
                                                <div className="col-lg-6 mb-3 ">

                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        id="name"
                                                        className="form-control"
                                                    />    <label for="name" className="small"> city</label>
                                                </div>
                                                <div className="col-lg-6 mb-3">

                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        id="name"
                                                        className="form-control"
                                                    /><label for="name" className="small"> State/Province</label>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label for="role" className="small bold">Role</label>
                                            <select name="role" id="role" className="form-select">
                                                <option value="" selected disabled>Select Job Role</option>
                                                <option value="IoT hardware Developement">
                                                    IoT hardware Developement
                                                </option>
                                                <option value="Python Developer">Python Developer</option>
                                                <option value="Android Developer">Android Developer</option>
                                                <option value="Software Developer">
                                                    Software Developer
                                                </option>
                                                <option value="Business Analyst">Business Analyst</option>
                                                <option value="Management">Management</option>
                                                <option value="Social Media Handler">
                                                    Social Media Handler
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label for="job-type" className="small bold">Job Type</label>
                                            <select name="job-type" id="job-type" className="form-select">
                                                <option value="" selected disabled>Select Job Type</option>
                                                <option value="Part Time / Internship">
                                                    Part Time / Internship
                                                </option>
                                                <option value="Full Time">Full Time</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label for="resume-link" className="small bold">Resume Link</label>
                                            <input
                                                type="url"
                                                name="resume-link"
                                                id="resume-link"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label for="resume-link" className="small bold">Resume </label>
                                            <input
                                                type="file"
                                                name="resume-link"
                                                id="resume-link"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label for="resume-link" className="small bold">Cover letter </label>
                                            <input
                                                type="file"
                                                name="resume-link"
                                                id="resume-link"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label for="description" className="small bold">Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                className="form-control"
                                            ></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-2 texr-center">
                                            <button type="button" className="btn btn-primary" id="send-btn">
                                                <strong>Apply Now</strong>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyForm
