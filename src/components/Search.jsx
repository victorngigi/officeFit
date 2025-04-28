import React, { useState, useEffect, useRef } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'db.json')
      .then((res) => res.json())
      .then((data) => {
        const flat = Object.values(data).flat();
        setAllItems(flat);
        setFilteredItems(flat);
      })
      .catch((err) => console.error('Error fetching db.json:', err));
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredItems(
      allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, allItems]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full flex items-center">
      <i className="bx bx-search text-xl text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-transparent md:placeholder-gray-700"
      />

      {searchTerm && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-md mt-1 max-h-64 overflow-y-auto z-50">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={`${item.id}-${item.name}`}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-600 truncate">
                  {item.description}
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
