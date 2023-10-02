import React, { useState } from 'react';

const AddItems = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName.trim() === '') {
      return;
    }

    onAddItem({ quantity, itemName });
    // Reset form after submitting
    setQuantity(1);
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row items-center justify-center bg-orange-500 h-14">
        <p className="text-sm">What do you need for your trip?</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-orange-50 border border-orange-300 text-gray-900 text-sm mx-2 w-20 h-6 rounded-full block px-2.5"
          placeholder="1"
          min="1"
        />
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="bg-orange-50 border border-orange-300 text-gray-900 text-sm mx-2 w-30 h-6 rounded-full block px-2.5"
          placeholder="Perfume"
        />
        <button
          type="submit"
          className="w-20 h-6 rounded-full bg-cyan-700 text-white text-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItems;
