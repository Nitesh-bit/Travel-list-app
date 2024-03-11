import { useEffect, useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const [isChecked, setIsChecked] = useState(item.packed);

  useEffect(() => {
    // Update the checked state in localStorage whenever it changes
    localStorage.setItem(`item_${item.id}`, isChecked);
  }, [item.id, isChecked]);

  // Toggle the checked state
  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggleItem(item.id);
  };

  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span style={isChecked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
