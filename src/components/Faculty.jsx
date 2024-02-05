// services.jsx

import React from 'react';

const Services = () => {
  return (
    <div className="services-container p-8">
      <p className="mb-8" style={{ fontSize: "1.2em" }}>Welcome to our cutting-edge skin disease analysis platform! We offer a range of services to cater to your dermatological needs:</p>

      <table className="services-table w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 text-left">Service</th>
            <th className="p-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-4">1. AI-Powered Diagnosis</td>
            <td className="p-4">Upload your skin selfie, and our advanced AI model will analyze it to identify the specific skin disease you might have. Receive accurate and rapid results within moments.</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-4">2. Data Recording for Personalized Insights</td>
            <td className="p-4">We securely record and store your analyzed data for future reference. This enables personalized insights, tracking the progression of skin conditions over time, and aiding in more effective long-term care.</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-4">3. Informative Disease Details</td>
            <td className="p-4">Learn more about the identified skin disease through detailed information provided by our platform. Understand its characteristics, potential causes, and suggested steps for managing or seeking professional medical advice.</td>
          </tr>
          {/* Add more services as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
