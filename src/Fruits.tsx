import { memo, useMemo } from "react";

type Props = {
  fruitsToEmojis: (fruits: string[]) => string[];
};

const Fruits = memo(({ fruitsToEmojis }: Props) => {
  console.log("rendering Fruits component...");
  const fruitsWithEmojis = [
    "Mango",
    "Banana",
    "Strawberry",
    "Pineapple",
    "Kiwi",
    "Watermelon",
    "Apple",
  ];

  const emojis = useMemo(() => fruitsToEmojis(fruitsWithEmojis), [fruitsToEmojis]);

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji}>{emoji}</li>
        ))}
      </ul>
    </div>
  );
})

export default Fruits;
