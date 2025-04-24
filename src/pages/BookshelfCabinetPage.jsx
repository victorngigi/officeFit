import React, { useEffect, useState } from "react";

const CabinetsPage = () => {
  const [cabinets, setCabinets] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setCabinets(data.cabinets || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Cabinets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cabinets.map((cabinet) => (
          <div key={cabinet.id} className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src={cabinet.imageUrl}
              alt={cabinet.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{cabinet.name}</h3>
            <p className="text-gray-600 mb-2">{cabinet.description}</p>
            <p className="text-sm text-gray-500">Color: {cabinet.color}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-blue-600 font-bold">${cabinet.price}</span>
              
              <span className="text-yellow-500">⭐ {cabinet.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabinetsPage;
