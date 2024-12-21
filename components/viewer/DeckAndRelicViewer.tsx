import DeckViewer from "./DeckViewer";
import RelicViewer from "./RelicViewer";

interface DeckCard {
  id: string;
  name: string;
  count: number;
  isUpgraded: boolean;
}

interface Relic {
  name: string;
}

export default function DeckAndRelicViewer({
  deck,
  relics,
  onCardClick,
  onRelicClick,
}: {
  deck: DeckCard[];
  relics: Relic[];
  onCardClick: (cardName: string, isUpgraded: boolean) => void;
  onRelicClick: (relicName: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Deck</h2>
        <DeckViewer deck={deck} onCardClick={onCardClick} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Relics</h2>
        <RelicViewer relics={relics} onRelicClick={onRelicClick} />
      </div>
    </div>
  );
}
