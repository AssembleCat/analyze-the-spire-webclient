import { ALL_RELICS, RelicRarity } from "@/type/Relic";
import { useMemo, useState } from "react";

interface RelicSelectorProps {
  character: string;
  onRelicSelect: (relicName: string) => void;
}

export default function RelicSelector({
  character,
  onRelicSelect,
}: RelicSelectorProps) {
  const [selectedRarities, setSelectedRarities] = useState<RelicRarity[]>([]);

  // 토글 버튼 선택 로직
  const toggleSelection = (
    rarity: RelicRarity,
    selected: RelicRarity[],
    setSelected: React.Dispatch<React.SetStateAction<RelicRarity[]>>
  ) => {
    if (selected.includes(rarity)) {
      setSelected(selected.filter((r) => r !== rarity));
    } else {
      setSelected([...selected, rarity]);
    }
  };

  // 유물 필터링
  const filteredRelics = useMemo(() => {
    const characterRelics = ALL_RELICS.filter((relic) =>
      relic.types.some((type) => type.toUpperCase() === character)
    );

    const rarityRelics = ALL_RELICS.filter((relic) =>
      relic.types.some((type) =>
        ["Common", "Uncommon", "Rare", "Shop", "Boss", "Event"].includes(type)
      )
    );

    const selectedRelics = selectedRarities.length
      ? ALL_RELICS.filter((relic) =>
          relic.types.some((type) =>
            selectedRarities.includes(type as RelicRarity)
          )
        )
      : [...characterRelics, ...rarityRelics];

    // 중복 제거 및 우선순위 설정
    const uniqueRelics = [
      ...characterRelics,
      ...selectedRelics.filter(
        (relic) =>
          !characterRelics.some((charRelic) => charRelic.name === relic.name)
      ),
    ];

    return uniqueRelics;
  }, [character, selectedRarities]);

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-md font-bold mb-2">Relic Filters</h3>

        {/* 필터링 버튼 */}
        <div className="grid grid-cols-6 gap-4 mb-4 mx-2">
          {/* Rarity 버튼 */}
          {(
            [
              "Common",
              "Uncommon",
              "Rare",
              "Shop",
              "Boss",
              "Event",
            ] as RelicRarity[]
          ).map((rarity) => (
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
          ))}
        </div>
      </div>

      {/* 유물 목록 */}
      <ul
        className="grid grid-cols-6 gap-2 overflow-y-scroll scrollbar-custom bg-white p-4 rounded shadow"
        style={{ gridAutoRows: "50px" }}
      >
        {filteredRelics.length > 0 ? (
          filteredRelics.map((relic) => (
            <li key={relic.name}>
              <button
                className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
                onClick={() => onRelicSelect(relic.name)}
              >
                {relic.name}
              </button>
            </li>
          ))
        ) : (
          <p>No relics found!</p>
        )}
      </ul>
    </div>
  );
}
