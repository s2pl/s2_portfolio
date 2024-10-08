import React from 'react';

const PrivacyPolicyRSMS = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow my-5">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <p className="text-gray-700">
            This Privacy Policy applies to the website cms.suvidhaen.com (here by referred to as "Website") that
            is owned and operated by Sarva Suvidhaen Private Ltd.(here by referred to as "Service Provider"). This Privacy Policy
            explains how we collect, use, and disclose your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Information Collection and Use</h2>
          <p className="text-gray-700 mb-2">
            The Service Provider collects the following types of information when you visit the Website:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold">Personal Information:</span> Information you provide directly, such as name, email address, or other details submitted via forms on the Website.</li>
            <li><span className="font-semibold">Automatically Collected Information:</span> Data such as your IP address, browser type, access time, pages visited, and interaction with the Website.</li>
            <li><span className="font-semibold">Provide Location-Based Services:</span> The Service Provider may utilize location data to offer personalized content and relevant services based on your geographical location.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            The information collected is used to improve the Website's functionality, provide personalized services, and
            for analytics.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p className="text-gray-700">
            The Website uses cookies to collect information and improve your experience. Cookies are small data files
            stored on your device that track website usage and activity. You can modify your browser settings to refuse
            cookies if you prefer, but this may limit some functionalities of the Website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
          <p className="text-gray-700 mb-2">
            Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.
          </p>
          <p className="text-gray-700 mb-2">
            Links to the third-party service providers' privacy policies:
          </p>
          <ul className="list-disc pl-6">
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <p className="text-gray-700">
            The Service Provider takes appropriate measures to protect the confidentiality of your data. We employ
            physical, electronic, and procedural safeguards to protect the information we collect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
          <p className="text-gray-700">
            We retain the information collected as long as necessary to provide services or comply with legal
            obligations. If you wish to request deletion of your personal data, please contact us at{' '}
            <a href="mailto:neeta.sinha.biputri@gmail.com" className="text-blue-600 hover:underline">
              neeta.sinha.biputri@gmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to the Privacy Policy</h2>
          <p className="text-gray-700">
            The Service Provider reserves the right to update this Privacy Policy at any time. Changes will be posted on
            this page, and continued use of the Website after updates are considered as your acceptance of the changes.
          </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-2">Your Consent</h2>
            <p className="text-gray-700">By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions regarding this Privacy Policy or your data, please contact us at{' '}
            <a href="mailto:neeta.sinha.biputri@gmail.com" className="text-blue-600 hover:underline">
              neeta.sinha.biputri@gmail.com
            </a>.
          </p>
        </section>

        <hr className="my-6 border-gray-200" />
      </div>
    </div>
  );
};

export default PrivacyPolicyRSMS;
