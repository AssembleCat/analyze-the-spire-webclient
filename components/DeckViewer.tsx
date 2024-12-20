interface DeckCard {
  name: string;
  count: number;
}

interface DeckViewerProps {
  deck: DeckCard[];
  onCardClick: (cardName: string) => void;
}

export default function DeckViewer({ deck, onCardClick }: DeckViewerProps) {
  return (
    <div>
      {deck.length === 0 ? (
        <p className="text-gray-500">Select your deck!</p>
      ) : (
        <ul className="space-y-2">
          {deck.map((card) => (
            <li key={card.name} className="flex items-center justify-between">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-red-600 hover:text-white rounded flex-grow text-left"
                onClick={() => onCardClick(card.name)}
              >
                {card.name}
              </button>
              <span className="ml-4 text-gray-700">x{card.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
