import React, { useState } from 'react';

const RequestApprovalList = () => {
  const [requests, setRequests] = useState([
    { id: 1, requester: 'John Doe', department: 'Sales', reason: 'Purchase of new laptops', status: 'Pending' },
    { id: 2, requester: 'Jane Smith', department: 'Marketing', reason: 'Marketing campaign budget approval', status: 'Approved' },
    // Additional request objects...
  ]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-8">
      <div className="max-w-screen-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-left">Request Approval List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Requester</th>
                <th className="border border-gray-400 px-4 py-2">Department</th>
                <th className="border border-gray-400 px-4 py-2">Reason</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id}>
                  <td className="border border-gray-400 px-4 py-2">{request.requester}</td>
                  <td className="border border-gray-400 px-4 py-2">{request.department}</td>
                  <td className="border border-gray-400 px-4 py-2">{request.reason}</td>
                  <td className={`border border-gray-400 px-4 py-2 ${request.status === 'Pending' ? 'text-yellow-600' : request.status === 'Approved' ? 'text-green-600' : 'text-red-600'}`}>{request.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestApprovalList;
