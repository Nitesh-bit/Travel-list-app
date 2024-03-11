import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 2, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  //Lifting up state in closest parent component
  const [items, setItems] = useState(function () {
    const storedValue = localStorage.getItem("items");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    if (!items.length) alert("List is empty!");
    else {
      const confirmed = confirm("Are you sure you want delete all items?");
      if (confirmed) setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
