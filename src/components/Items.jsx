import React from 'react';
import { LuX } from 'react-icons/lu';

const Items = ({ item, onToggle, onRemove }) => {
  return (
    <div
      className={`flex items-center m-3 ml-12 relative ${
        item.isChecked ? 'line-through' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => onToggle(item.id)}
        value=""
        className="w-3 h-3 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <div className="flex flex-row gap-4">
        <p className="flex items-center relative">
          <span className="mr-1">
            {item.quantity} {item.itemName}
          </span>
          <button
            className="text-red-500 font-bold"
            onClick={() => onRemove(item.id)}
          >
            <LuX className="mt-1" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Items;
