interface CardSelectorProps {
  character: string;
  onCardSelect: (card: string) => void;
}

const characterCards: Record<string, string[]> = {
  IRONCLAD: ["Strike", "Bash", "Block"],
  SILENT: ["Neutralize", "Survivor", "Backflip"],
  DEFECT: ["Zap", "Dualcast", "Loop"],
  WATCHER: ["Vigilance", "Strike", "Crescendo"],
  COLORLESS: ["Apotheosis", "Panache", "Jack of All Trades"],
};

export default function CardSelector({
  character,
  onCardSelect,
}: CardSelectorProps) {
  const cards = characterCards[character] || [];

  return (
    <div>
      <h3 className="text-md font-bold mb-2">{character} Cards</h3>
      <ul className="grid grid-cols-2 gap-2">
        {cards.map((card) => (
          <li key={card}>
            <button
              className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
              onClick={() => onCardSelect(card)}
            >
              {card}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
