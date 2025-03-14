import { useState } from "react";
import { DECK, CardType, Rarity } from "../../type/Deck";

interface CardSelectorProps {
  character: string;
  onCardSelect: (card: string) => void;
}

const rarityOrder: Record<Rarity, number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 3,
  Special: 4,
};

const typeOrder: Record<CardType, number> = {
  Attack: 1,
  Skill: 2,
  Power: 3,
};

export default function CardSelector({
  character,
  onCardSelect,
}: CardSelectorProps) {
  const deck = DECK[character] || { attack: [], skill: [], power: [] };

  // 필터링 기준을 배열 형태로 설정
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<CardType[]>([]);

  const toggleSelection = <T,>(
    value: T,
    selectedValues: T[],
    setSelectedValues: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  // 필터링된 카드 목록
  const filteredCards = [...deck.attack, ...deck.skill, ...deck.power].filter(
    (card) => {
      const matchesRarity =
        selectedRarities.length === 0 || selectedRarities.includes(card.rarity);
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(card.type);
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
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-md font-bold mb-2">{character} Cards</h3>

        {/* 필터링 버튼 */}
        <div className="grid grid-cols-7 gap-4 mb-4 mx-2">
          {/* 카드 타입 버튼 */}
          {(["Attack", "Skill", "Power"] as CardType[]).map((type) => (
            <button
              key={type}
              className={`w-full px-4 py-2 border rounded ${
                selectedTypes.includes(type)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() =>
                toggleSelection(type, selectedTypes, setSelectedTypes)
              }
            >
              {type}
            </button>
          ))}

          {/* 레어도 버튼 */}
          {(["Common", "Uncommon", "Rare", "Special"] as Rarity[]).map(
            (rarity) => (
              <button
                key={rarity}
                className={`w-full px-4 py-2 border rounded ${
                  selectedRarities.includes(rarity)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  toggleSelection(rarity, selectedRarities, setSelectedRarities)
                }
              >
                {rarity}
              </button>
            )
          )}
        </div>
      </div>

      {/* 카드 목록 */}
      <ul
        className=" grid grid-cols-6 gap-2 overflow-y-scroll scrollbar-custom bg-white p-4 rounded shadow"
        style={{ gridAutoRows: "50px" }}
      >
        {sortedCards.length > 0
          ? sortedCards.map((card) => (
              <li key={card.name}>
                <button
                  className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
                  onClick={() => onCardSelect(card.name)}
                >
                  {card.name}
                  {card.specialCategory && ` (${card.specialCategory})`}
                </button>
              </li>
            ))
          : "No result here check the other cards!"}
      </ul>
    </div>
  );
}
