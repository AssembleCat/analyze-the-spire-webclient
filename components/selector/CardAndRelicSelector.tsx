import CardSelector from "./CardSelector";
import EnemySelector from "./EnemySelector";
import RelicSelector from "./RelicSelector";
import { useState } from "react";

interface CardAndRelicSelectorProps {
  character: string;
  onCardSelect: (card: string) => void;
  onRelicSelect: (relic: string) => void;
  onEnemySelect: (enemy: string) => void;
}

export default function CardAndRelicSelector({
  character,
  onCardSelect,
  onRelicSelect,
  onEnemySelect,
}: CardAndRelicSelectorProps) {
  const [view, setView] = useState<"cards" | "relics" | "enemy">("cards");

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-6 py-2 border rounded ${
            view === "cards" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("cards")}
        >
          Cards
        </button>
        <button
          className={`px-6 py-2 border rounded ${
            view === "relics" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("relics")}
        >
          Relics
        </button>
        <button
          className={`px-6 py-2 border rounded ${
            view === "enemy" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("enemy")}
        >
          Enemy
        </button>
      </div>

      {view === "cards" ? (
        <CardSelector character={character} onCardSelect={onCardSelect} />
      ) : view === "relics" ? (
        <RelicSelector character={character} onRelicSelect={onRelicSelect} />
      ) : (
        <EnemySelector onEnemySelect={onEnemySelect} />
      )}
    </div>
  );
}
