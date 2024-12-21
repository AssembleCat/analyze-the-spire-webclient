interface DeckCard {
  id: string;
  name: string;
  count: number;
  isUpgraded: boolean;
}

export default function DeckViewer({
  deck,
  onCardClick,
}: {
  deck: DeckCard[];
  onCardClick: (cardName: string, isUpgraded: boolean) => void;
}) {
  const totalCards = deck.reduce((total, card) => total + card.count, 0);
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-md mb-2">
          {deck.length > 0 ? "Click to upgrade and purge" : "Select your deck!"}
        </h3>
        <h3>{totalCards > 0 ? `${totalCards} Cards` : ""}</h3>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {deck.map((card) => (
          <li key={card.id}>
            <button
              className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
              onClick={() => onCardClick(card.name, card.isUpgraded)}
            >
              {card.name} {card.isUpgraded ? "(Upgraded)" : ""}{" "}
              {card.count > 1 ? `x ${card.count}` : ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
