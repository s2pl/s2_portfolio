import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Contactus = () => {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    message: '',
    country: 'India'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number to accept only natural numbers
    if (name === 'phoneNumber' && !/^\d+$/.test(value)) {
      return; // Exit if input contains non-digit characters
    }

    // Limit phone number to 10 characters
    if (name === 'phoneNumber' && value.length > 10) {
      return;
    }

    setFormData({ ...formData, [name]: value.slice(0, 10) }); // Slice to limit to 10 characters
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      return;
    }

    // EmailJS configuration
    const serviceId = 'service_cb18p0c';
    const templateId = 'template_g9u7tp9';
    const userId = 'YBPHtMkiDsFRGpeN4';

    // Prepare the template parameters with formData
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phoneNumber,
      company: formData.company,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Error sending email: ' + error);
      });
  };

  const countryCodes = {
    India: '+91'
    // Add more countries here if needed
  };

  // Function to handle country selection change
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      phoneNumber: countryCodes[selectedCountry] || ''
    });
  };

  return (
    <div>
      <div className="bg-white px-6 md:py-18 py-20 lg:px-72">
        <div className='' style={{ boxShadow: "14px 14px 14px 14px rgba(0, 0, 0, 0.279)", padding: "1rem" }}>
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] "
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight pt-4 text-gray-900 sm:text-4xl">Contact With Sarva Suvidhaen</h2>
          </div>
          <form className="mx-auto mt-10 max-w-xl sm:mt-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-md font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-md font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-md font-semibold leading-6 text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2 flex items-center">
                <div className="w-1/3">
                  <label htmlFor="country" className="block text-md font-semibold leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="country"
                      id="country"
                      className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleCountryChange}
                      value={formData.country}
                    >
                      <option value="India">India</option>
                      {/* Add more countries here */}
                    </select>
                  </div>
                </div>
                <div className="w-2/3 ml-4">
                  <label htmlFor="phoneNumber" className="block text-md font-semibold leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5 relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      {countryCodes[formData.country]}
                    </span>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="tel"
                      className="block w-full rounded-md border-1 border-neutral-800 px-10 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={formData.phoneNumber}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-1 border-neutral-800 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to our{' '}
                  <Link to="/privacypolicy" className="font-semibold text-indigo-600" style={{ cursor: 'pointer' }}>
                    privacy policy
                  </Link>
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="my-10">
              <button
                type="submit"
                className={classNames(
                  'block w-full rounded-md px-4 py-3 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  agreed ? 'bg-gray-600 hover:bg-indigo-700' : 'bg-gray-600 cursor-not-allowed'
                )}
                disabled={!agreed}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
