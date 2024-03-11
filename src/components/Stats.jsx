export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const itemsLength = items.length;
  const itemsPacked = items.filter((item) => item.packed === true).length;
  const perItemsPacked = Math.round((itemsPacked / itemsLength) * 100);
  return (
    <footer className="stats">
      <em>
        {perItemsPacked === 100
          ? "You got everything! Ready to go 🛫"
          : `💼 You have ${itemsLength} ${
              itemsLength === 1 ? `item` : `items`
            } on your
          list, and you already packed ${itemsPacked} (
          ${perItemsPacked}%)`}
      </em>
    </footer>
  );
}
