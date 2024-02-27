import React, { useState } from 'react';

const VendorList = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'John Doe', occupation: 'Software Developer', email: 'john.doe@example.com', mobile: '123-456-7890' },
    { id: 2, name: 'Jane Smith', occupation: 'Graphic Designer', email: 'jane.smith@example.com', mobile: '987-654-3210' },
    { id: 3, name: 'Michael Johnson', occupation: 'Marketing Manager', email: 'michael.johnson@example.com', mobile: '456-789-0123' },
    { id: 4, name: 'Emily Brown', occupation: 'Project Manager', email: 'emily.brown@example.com', mobile: '789-012-3456' }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
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

export default VendorList;
