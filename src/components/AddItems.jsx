import React from 'react';

const AddItems = () => {
  return (
    <form>
      <div className="flex flex-row items-center justify-center bg-orange-500 h-14">
        <p className="text-sm">What do you need for your trip?</p>
        <input
          type="number"
          className="bg-orange-50 border border-orange-300 text-gray-900 text-sm mx-2 w-20 h-6 rounded-full block px-2.5"
          placeholder="1"
          min="1"
        />
        <input
          type="text"
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
