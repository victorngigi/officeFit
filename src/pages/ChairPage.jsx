import React, { useEffect, useState } from "react";

const ChairsPage = () => {
  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setChairs(data.chairs || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Chairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {chairs.map((chair) => (
          <div key={chair.id} className="bg-white p-4 rounded-xl shadow-md">
            <img src={chair.imageUrl} alt={chair.name} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{chair.name}</h3>
            <p className="text-gray-600">{chair.description}</p>
            <p className="text-blue-600 font-bold mt-2">${chair.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChairsPage;
