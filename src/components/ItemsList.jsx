// ItemsList.jsx
import React, { useState } from 'react';
import Items from './Items';
import AddItems from './AddItems';

const ItemsList = () => {
  const [items, setItems] = useState([]);

  const handleToggle = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, isChecked: !item.isChecked }
          : item
      )
    );
  };

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: new Date().getTime(), isChecked: false },
    ]);
  };

  const handleRemoveItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <div>
      <AddItems onAddItem={handleAddItem} />
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <Items
            key={item.id}
            item={item}
            onToggle={handleToggle}
            onRemove={() => handleRemoveItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
