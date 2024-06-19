import React from 'react'
import { useState } from 'react';
import './component.css'
import { CButton, CModal, CModalBody, CModalFooter } from "@coreui/react";
const ApplyForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        role: '',
        jobType: '',
        resumeLink: '',
        resumeFile: null,
        coverLetterFile: null,
        description: '',
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { fname, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [fname]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setShowModal(true);
            return;
        }

        try {
            const response = await fetch('./SubmitForm', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
            // You can add logic here to send email
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };
    return (
        <div >
            {showModal && (
                    <CModal
                    visible={showModal}
                    backdrop="static"
                    aria-labelledby="ScoreNow"
                >
                    <CModalBody>
                    <p>Please fill in the required fields</p>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="secondary"
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            Ok
                        </CButton>
                    </CModalFooter>
                </CModal>
            )}
            <div className="container " >
                <div className="row my-4">
                    <div className="col-lg-10 mx-auto">
                        <div
                            className="card border-0 "
                            style={{ boxShadow: "14px 14px 14px 14px rgba(0, 0, 0, 0.279)" }}
                        >
                            <div className="card-body">
                                <h2 className="text-center">
                                    Job Application
                                </h2>
                                <p className='text-center'>Please complete the form below to apply htmlFor a position with us.</p>
                                <div className='border-2'>

                                </div>
                                <form onSubmit={handleSubmit} id="request-send">
                                    <div className="row mt-3 ">
                                        <label htmlFor="name" className="small bold"> Full name</label>
                                        <div className="col-lg-3 mb-3 ">

                                            <input
                                                type="text"
                                                name="fname"
                                                id="name"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="name" className="small"> first Name</label>

                                        </div>
                                        <div className="col-lg-3 mb-3">

                                            <input
                                                type="text"
                                                name="mname"
                                                id="name"
                                                className="form-control"
                                                onChange={handleChange}
                                            /><label htmlFor="name" className="small">middle Name</label>
                                        </div>
                                        <div className="col-lg-3 mb-3">

                                            <input
                                                type="text"
                                                name="lname"
                                                id="name"
                                                className="form-control"
                                                onChange={handleChange}
                                            /><label htmlFor="name" className="small">last Name</label>
                                        </div>
                                        <div className="row mt-3">
                                            <label htmlFor="name" className="small bold"> Birth Date</label>
                                            <div className="col-lg-3 mb-3 ">

                                                <input
                                                    type="text"
                                                    name="month"
                                                    id="name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />    <label htmlFor="name" className="small"> Month </label>
                                            </div>
                                            <div className="col-lg-3 mb-3">

                                                <input
                                                    type="text"
                                                    name="day"
                                                    id="name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                /><label htmlFor="name" className="small"> Day</label>
                                            </div>
                                            <div className="col-lg-3 mb-3">

                                                <input
                                                    type="text"
                                                    name="year"
                                                    id="name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="name" className="small"> Year</label>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="Address" className="small bold">Current Address</label>
                                            <input
                                                type="text"
                                                name="CAddress"
                                                id="email"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="email" className="small">Street Address</label>
                                            <input
                                                type="text"
                                                name="SAddress"
                                                id="email"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="city" className="small">Street Address Line 2</label>
                                            <div className="row mt-2">
                                                <div className="col-lg-6 mb-3 ">

                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="name"
                                                        className="form-control"
                                                        onChange={handleChange}
                                                    />    <label htmlFor="name" className="small"> city</label>
                                                </div>
                                                <div className="col-lg-6 mb-3">

                                                    <input
                                                        type="text"
                                                        name="State"
                                                        id="name"
                                                        className="form-control"
                                                        onChange={handleChange}
                                                    /><label htmlFor="name" className="small"> State/Province</label>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                            <label htmlFor="role" className="small bold">Role</label>
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
                                            <label htmlFor="job-type" className="small bold">Job Type</label>
                                            <select name="jobtype" id="job-type" className="form-select">
                                                <option value="" selected disabled>Select Job Type</option>
                                                <option value="Part Time / Internship">
                                                    Part Time / Internship
                                                </option>
                                                <option value="Full Time">Full Time</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="resume-link" className="small bold">Resume Link</label>
                                            <input
                                                type="url"
                                                name="resumelink"
                                                id="resume-link"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="resume-link" className="small bold">Resume </label>
                                            <input
                                                type="file"
                                                name="resume"
                                                id="resume-link"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="resume-link" className="small bold">Cover letter </label>
                                            <input
                                                type="file"
                                                name="coverlink"
                                                id="resume-link"
                                                className="form-control"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-2">
                                            <label htmlFor="description" className="small bold">Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                className="form-control"
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-2 texr-center">
                                            <button type="submit" className="btn btn-primary" id="send-btn">
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
