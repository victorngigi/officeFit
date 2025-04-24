import React, { useEffect, useState } from "react";

const TablesPage = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setTables(data.conferenceTables || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Conference Tables</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tables.map((table) => (
          <div key={table.id} className="bg-white p-4 rounded-xl shadow-md">
            <img src={table.imageUrl} alt={table.name} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{table.name}</h3>
            <p className="text-gray-600">{table.description}</p>
            <p className="text-blue-600 font-bold mt-2">${table.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablesPage;