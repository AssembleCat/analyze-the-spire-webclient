import { useState } from "react";
import { DECK } from "../type/Deck"; // Deck.ts에서 DECK을 임포트

interface CardSelectorProps {
  character: string;
  onCardSelect: (card: string) => void;
}

const rarityOrder: Record<string, number> = {
  Common: 2,
  Uncommon: 3,
  Rare: 4,
  Special: 5,
};

const typeOrder: Record<string, number> = {
  Attack: 1,
  Skill: 2,
  Power: 3,
};

export default function CardSelector({
  character,
  onCardSelect,
}: CardSelectorProps) {
  const deck = DECK[character] || { attack: [], skill: [], power: [] };

  // 카드 필터링 기준 설정
  const [selectedRarity, setSelectedRarity] = useState<
    "Common" | "Uncommon" | "Rare" | "Special" | "All"
  >("All");
  const [selectedType, setSelectedType] = useState<
    "Attack" | "Skill" | "Power" | "All"
  >("All");

  // 선택한 기준에 맞는 카드만 필터링
  const filteredCards = [...deck.attack, ...deck.skill, ...deck.power].filter(
    (card) => {
      const matchesRarity =
        selectedRarity === "All" || card.rarity === selectedRarity;
      const matchesType = selectedType === "All" || card.type === selectedType;
      return matchesRarity && matchesType;
    }
  );

  // 레어도와 카드 타입 순서에 따라 카드 정렬
  const sortedCards = filteredCards.sort((a, b) => {
    return (
      rarityOrder[a.rarity] - rarityOrder[b.rarity] ||
      typeOrder[a.type] - typeOrder[b.type]
    );
  });

  return (
    <div>
      <h3 className="text-md font-bold mb-2">{character} Cards</h3>

      {/* 필터링 및 정렬 기준 선택 */}
      <div className="mb-4">
        <div className="flex space-x-4">
          {/* 카드 타입 필터 */}
          <select
            value={selectedType}
            onChange={(e) =>
              setSelectedType(
                e.target.value as "Attack" | "Skill" | "Power" | "All"
              )
            }
            className="p-2 border rounded"
          >
            <option value="All">All Types</option>
            <option value="Attack">Attack</option>
            <option value="Skill">Skill</option>
            <option value="Power">Power</option>
          </select>

          {/* 레어도 필터 */}
          <select
            value={selectedRarity}
            onChange={(e) =>
              setSelectedRarity(
                e.target.value as
                  | "Common"
                  | "Uncommon"
                  | "Rare"
                  | "Special"
                  | "All"
              )
            }
            className="p-2 border rounded"
          >
            <option value="All">All Rarities</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Special">Special</option>
          </select>
        </div>
      </div>

      {/* 카드 목록 */}
      <ul className="grid grid-cols-2 gap-2 max-h-[calc(100vh-220px)] overflow-y-auto scrollbar-custom p-2">
        {sortedCards.map((card) => (
          <li key={card.name}>
            <button
              className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
              onClick={() => onCardSelect(card.name)}
            >
              {card.name}
              {card.specialCategory && ` (${card.specialCategory})`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
