
type Props = {
  fruitsToEmojis: (fruits: string[]) => string[];
};

const Fruits = ({ fruitsToEmojis }: Props) => {
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

  const emojis = fruitsToEmojis(fruitsWithEmojis);

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
}

export default Fruits;
