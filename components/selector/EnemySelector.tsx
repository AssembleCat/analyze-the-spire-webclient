import { Act, ALL_ENEMY } from "@/type/Enemy";
import { useMemo, useState } from "react";

interface EnemySelectorProps {
  onEnemySelect: (enemyName: string) => void;
}

export default function EnemySelector({ onEnemySelect }: EnemySelectorProps) {
  const [selectedActs, setSelectedActs] = useState<Act[]>([]);

  // 토글 버튼 선택 로직
  const toggleSelection = (
    act: Act,
    selected: Act[],
    setSelected: React.Dispatch<React.SetStateAction<Act[]>>
  ) => {
    if (selected.includes(act)) {
      setSelected(selected.filter((a) => a !== act));
    } else {
      setSelected([...selected, act]);
    }
  };
  // 필터링된 적 목록 계산
  const filteredEnemies = useMemo(() => {
    return selectedActs.length
      ? ALL_ENEMY.filter((enemy) =>
          enemy.stage.some((stage) => selectedActs.includes(stage))
        )
      : ALL_ENEMY;
  }, [selectedActs]);

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-md font-bold mb-2">Enemy Filters</h3>

        {/* 필터링 버튼 */}
        <div className="grid grid-cols-6 gap-4 mb-4 mx-2">
          {(
            ["1", "2", "3", "?", "Event", "Monster", "Elite", "Boss"] as Act[]
          ).map((act) => (
            <button
              key={act}
              className={`w-full px-4 py-2 border rounded ${
                selectedActs.includes(act)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() =>
                toggleSelection(act, selectedActs, setSelectedActs)
              }
            >
              {act}
            </button>
          ))}
        </div>
      </div>

      {/* 적 목록 */}
      <ul
        className="grid grid-cols-6 gap-2 overflow-y-scroll scrollbar-custom bg-white p-4 rounded shadow"
        style={{ gridAutoRows: "50px" }}
      >
        {filteredEnemies.length > 0 ? (
          filteredEnemies.map((enemy) => (
            <li key={enemy.name}>
              <button
                className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
                onClick={() => onEnemySelect(enemy.name)}
              >
                {enemy.name}
              </button>
            </li>
          ))
        ) : (
          <p>No enemies found!</p>
        )}
      </ul>
    </div>
  );
}
