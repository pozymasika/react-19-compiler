import { useCallback, useState } from "react";
import Counter from "./Counter";
import Fruits from "./Fruits";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log("Rendering App component...");

  const fruitsToEmojis = useCallback((fruits: string[]) => {
    console.log("calculating emojis...");
    return fruits.map((fruit) => {
      switch (fruit) {
        case "Mango":
          return "🥭";
        case "Banana":
          return "🍌";
        case "Strawberry":
          return "🍓";
        case "Pineapple":
          return "🍍";
        case "Kiwi":
          return "🥝";
        case "Watermelon":
          return "🍉";
        case "Apple":
          return "🍎";
        default:
          return "❓";
      }
    });
  }, []);

  return (
    <main>
      <div className="card">
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
      <Counter />
      <Fruits fruitsToEmojis={fruitsToEmojis} />
    </main>
  );
}

export default App;
