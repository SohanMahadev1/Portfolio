import React, { useState, useEffect } from "react";

const DataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/PersonalData/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-20">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="text-white text-center mt-20">No data found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Stored Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, name, email, workType, description }) => (
          <div
            key={id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">ID: {id}</h3>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Work Type:</strong> {workType}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
