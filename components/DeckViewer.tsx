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
  return (
    <div>
      <h3 className="text-md font-bold mb-2">
        {deck.length > 0 ? "Click to upgrade and purge" : "Select your deck!"}
      </h3>
      <ul className="grid grid-cols-2 gap-2">
        {deck.map((card) => (
          <li key={card.id}>
            {" "}
            {/* 고유한 ID를 key로 사용 */}
            <button
              className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
              onClick={() => onCardClick(card.name, card.isUpgraded)}
            >
              {card.name} {card.isUpgraded ? "(Upgraded)" : ""} x {card.count}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
