export default function CardSelector({ className }) {
    const characters = ["Ironclad", "Silent", "Defect", "Watcher"];
    const cards = Array.from({ length: 20 }, (_, i) => `Card ${i + 1}`); // Sample cards

    return (
        <section className={`${className}`}>
            <h2 className="text-xl font-bold mb-4">Select Cards</h2>
            {characters.map((character) => (
                <div key={character} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{character}</h3>
                    <ul className="grid grid-cols-2 gap-2">
                        {cards.map((card) => (
                            <li key={card} className="p-2 bg-white rounded shadow hover:bg-gray-100 cursor-pointer">
                                {card}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}