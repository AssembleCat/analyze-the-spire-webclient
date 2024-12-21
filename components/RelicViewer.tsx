interface Relics {
  name: string;
}

export default function RelicViewer({
  relics,
  onRelicClick,
}: {
  relics: Relics[];
  onRelicClick: (relicName: string) => void;
}) {
  const totalRelics = relics.length;
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-md mb-2">
          {relics.length > 0 ? "Click to purge" : "Select your relic!"}
        </h3>
        <h3>{totalRelics > 0 ? `${totalRelics} Cards` : ""}</h3>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {relics.map((relic) => (
          <li key={relic.name}>
            <button
              className="w-full px-4 py-2 bg-gray-200 hover:bg-blue-600 hover:text-white rounded"
              onClick={() => onRelicClick(relic.name)}
            >
              {relic.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
