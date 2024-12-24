import { Enemy } from "@/type/Enemy";
import DeckViewer from "./DeckViewer";
import RelicViewer from "./RelicViewer";
import EnemyViewer from "./EnemyViewer";

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
  enemy,
  onCardClick,
  onRelicClick,
  onEnemyClick,
}: {
  deck: DeckCard[];
  relics: Relic[];
  enemy: Enemy;
  onCardClick: (cardName: string, isUpgraded: boolean) => void;
  onRelicClick: (relicName: string) => void;
  onEnemyClick: () => void;
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
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Enemy</h2>
        <EnemyViewer enemy={enemy} onEnemyClick={onEnemyClick} />
      </div>
    </div>
  );
}
