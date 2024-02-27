import React, { useState } from 'react';

const Vendor = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'ABC Solutions', occupation: 'Software Development', email: 'abc@example.com', mobile: '123-456-7890' },
    { id: 2, name: 'Tech Innovations', occupation: 'Data Analytics', email: 'tech@example.com', mobile: '987-654-3210' },
    { id: 3, name: 'Global Visionaries', occupation: 'Web Design', email: 'global@example.com', mobile: '456-789-0123' },
    { id: 4, name: 'FutureTech Corp', occupation: 'Cloud Computing', email: 'futuretech@example.com', mobile: '789-012-3456' },
    { id: 5, name: 'DataMinds Ltd', occupation: 'AI Solutions', email: 'dataminds@example.com', mobile: '987-654-3210' },
    { id: 6, name: 'Innovate Solutions', occupation: 'Cybersecurity', email: 'innovate@example.com', mobile: '456-789-0123' },
    { id: 7, name: 'EcoTech Enterprises', occupation: 'Renewable Energy', email: 'ecotech@example.com', mobile: '789-012-3456' },
    { id: 8, name: 'SmartSolutions Inc.', occupation: 'IoT Development', email: 'smartsolutions@example.com', mobile: '123-456-7890' }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Vendors Selected by GEM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vendors.map(vendor => (
          <div key={vendor.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{vendor.name}</h3>
            <p className="text-gray-600 mb-1">{vendor.occupation}</p>
            <p className="text-gray-600 mb-1">{vendor.email}</p>
            <p className="text-gray-600">{vendor.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;
