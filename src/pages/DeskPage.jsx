import React, { useState, useEffect } from "react";

const DeskPage = () => {
  const [desks, setDesks] = useState([]);

  useEffect(() => {
    // Simulate fetching data from db.json
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setDesks(data.desks)) // Assuming 'desks' is in the JSON structure
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Desks Collection
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {desks.length > 0 ? (
          desks.map((desk) => (
            <div key={desk.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={desk.imageUrl}
                alt={desk.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{desk.name}</h3>
              <p className="text-gray-500">{desk.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-2">${desk.price}</p>
            </div>
          ))
        ) : (
          <p>Loading desks...</p>
        )}
      </div>
    </div>
  );
};

export default DeskPage;
