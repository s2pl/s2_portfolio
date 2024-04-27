import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, } from '@coreui/react';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contactus = () => {
  const [agreed, setAgreed] = useState(false)
  const [showModalFront, setShowModalFront] = useState(false);
  return (
    <div>
      <CModal visible={showModalFront} backdrop="static" aria-labelledby="ScoreNow" className="custom-modal" size="xl"
        onClose={() => {
          setShowModalFront(false);
        }}  >
        <CModalHeader>
          <p className='apply-heading' style={{ textAlign: "center" }}>Privacy Policy </p>
        </CModalHeader>
        <CModalBody className="custom-modal-body">
          <div className='apply-details'>
            <div className='="apply-des'>
              <div className='apply-des-content'>
                <ol className='apply-ollist'>
                  <li className='apply-list'><h4>Effective date: Oct 23, 2023</h4></li>

                  <div className='apply-about'>
                    <p>
                      Sarva Suvidhaen Private Ltd.  ("us", "we", or "our")

                      operates the website and the mobile application (the
                      "Service").
                    </p>
                    <p>
                      If you choose to use our Service, then you agree to the
                      collection and use of information in relation to this
                      policy. The Personal Information that we collect is used
                      for providing and improving the Service. We will not use
                      or share your information with anyone except as
                      described in this Privacy Policy.
                    </p>

                    <p>
                      The terms used in this Privacy Policy have the same
                      meanings as in our Terms and Conditions unless otherwise
                      defined in this Privacy Policy.
                    </p>
                    <p>
                      This page is used to inform visitors regarding our
                      policies with the collection, use, and disclosure of
                      Personal Information if anyone decides to use our
                      Service.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>  <h4>Information Collection and Use :</h4></li>
                    <p>
                      For a better experience, while using our Service, we may
                      require you to provide us with certain personally
                      identifiable information. The information that we
                      request will be retained by us and used as described in
                      this privacy policy.
                    </p>

                    <p>
                      The app may use third-party services that may collect
                      information used to identify you.
                    </p>
                    <p>
                      Link to the privacy policy of third-party service
                      providers used by the app
                    </p>

                    <p>Google Play Services</p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>   <h4>Log Data</h4> </li>
                    <p>
                      We want to inform you that whenever you use our Service,
                      in a case of an error in the app, we collect data and
                      information (through third-party products) on your phone
                      called Log Data. This Log Data may include information
                      such as your device Internet Protocol (“IP”) address,
                      device name, operating system version, the configuration
                      of the app when utilizing our Service, the time and date
                      of your use of the Service, and other statistics.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>  <h4>Cookies:</h4></li>
                    <p>
                      Cookies are files with a small amount of data that are
                      commonly used as anonymous unique identifiers. This
                      Service does not use these “cookies” explicitly.
                      However, the app may use third-party code and libraries
                      that use “cookies” to collect information and improve
                      their services.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>   <h4>Service Providers :</h4> </li>
                    <p>
                      We may employ third-party companies and individuals to
                      facilitate our Service, provide the Service on our
                      behalf, perform Service-related services, or assist us
                      in analyzing how our Service is used. These third
                      parties have access to your Personal Information but are
                      obligated not to disclose or use it for any other
                      purpose.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>        <h4>Security :</h4></li>
                    <p>
                      We value your trust in providing us your Personal
                      Information, and we strive to use commercially
                      acceptable means of protecting it. But remember that no
                      method of transmission over the internet or method of
                      electronic storage is 100% secure and reliable, and we
                      cannot guarantee its absolute security.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>   <h4>Links to Other Sites</h4></li>
                    <p>
                      This Service may contain links to other sites. If you
                      click on a third-party link, you will be directed to
                      that site. Note that these external sites are not
                      operated by us. Therefore, we strongly advise you to
                      review the Privacy Policy of these websites. We have no
                      control over and assume no responsibility for the
                      content, privacy policies, or practices of any
                      third-party sites or services.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>   <h4>Children's Privacy</h4></li>
                    These Services do not address anyone under the age of
                    13. We do not knowingly collect personally identifiable
                    information from children under 13 years of age. If you
                    are a parent or guardian and you are aware that your
                    child has provided us with personal information, please
                    contact us so that we will be able to do the necessary
                    actions.

                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'> <h4>Changes to This Privacy Policy</h4></li>
                    <p>
                      We may update our Privacy Policy from time to time.
                      Thus, you are advised to review this page periodically
                      for any changes. We will notify you of any changes by
                      posting the new Privacy Policy on this page.
                    </p>
                  </div>
                  <div className='apply-about'>
                  <li className='apply-list'>   <h4>Contact Us</h4></li>
                    <p>
                      Sarva Suvidhaen Private Ltd. is located at Lakhanpur, Punpun, Patna, Bihar, India.
                      <br />
                      If you have any questions or suggestions about our
                      Privacy Policy, do not hesitate to contact us at  <a href="tel:91231 83988" className='pointer'> <span className='pointer text-black'>+91 9955481699</span></a> or email us at
                      <a href="mailto:crackjeeonline@gmail.com" style={{ color: "blue" }}> crackjeeonline@gmail.com</a>.
                    </p>
                  </div>
                </ol> </div>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton className="custom-button" onClick={() => setShowModalFront(false)}>
            Ok
          </CButton>
        </CModalFooter>
      </CModal>
      <div className="bg-white px-6 py-18 sm:py-20 lg:px-8" >
        <div className='' style={{ boxShadow: "14px 14px 14px 14px rgba(0, 0, 0, 0.279)", padding: "1rem" }}>
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact With Sarva Suvidhaen</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">

            </p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0  bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>India</option>

                    </select>

                  </div>
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
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
                </Switch.Label>
                By selecting this, you agree to our
                <div className=' font-semibold text-indigo-600 ' style={{ cursor: "pointer" }}
                  onClick={() => setShowModalFront(true)}>
                  privacy&nbsp;policy
                </div>
              </Switch.Group>

            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-gray-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
