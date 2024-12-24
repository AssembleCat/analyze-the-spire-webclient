import { Enemy } from "@/type/Enemy";

export default function EnemyViewer({
  enemy,
  onEnemyClick,
}: {
  enemy: Enemy;
  onEnemyClick: () => void;
}) {
  return (
    <div>
      <button
        className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
        onClick={() => onEnemyClick()}
      >
        {enemy.name}
      </button>
    </div>
  );
}
