export default function DeckDisplay({ className }) {
    const selectedCards = ["Card 1", "Card 3", "Card 7"]; // Example selected cards

    return (
        <section className={`${className}`}>
            <h2 className="text-xl font-bold mb-4">Your Deck</h2>
            <ul className="space-y-2">
                {selectedCards.map((card) => (
                    <li key={card} className="p-2 bg-white rounded shadow">
                        {card}
                    </li>
                ))}
            </ul>
        </section>
    );
}