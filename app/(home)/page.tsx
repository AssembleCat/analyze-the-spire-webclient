"use client";

import { useState } from "react";
import CardSelector from "@/components/CardSelector";
import DeckViewer from "@/components/DeckViewer";

const characters = ["IRONCLAD", "SILENT", "DEFECT", "WATCHER", "COLORLESS"];

type DeckCard = {
  name: string;
  count: number;
};

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [deck, setDeck] = useState<DeckCard[]>([]);

  const handleCardAdd = (cardName: string) => {
    const existingCard = deck.find((card) => card.name === cardName);

    if (existingCard) {
      // 카드가 이미 덱에 있으면 개수 증가
      setDeck(
        deck.map((card) =>
          card.name === cardName ? { ...card, count: card.count + 1 } : card
        )
      );
    } else {
      // 새로운 카드는 추가
      setDeck([...deck, { name: cardName, count: 1 }]);
    }
  };

  const handleCardClick = (cardName: string) => {
    const existingCard = deck.find((card) => card.name === cardName);

    if (existingCard) {
      if (existingCard.count > 1) {
        // 개수가 2개 이상인 경우 개수 감소
        setDeck(
          deck.map((card) =>
            card.name === cardName ? { ...card, count: card.count - 1 } : card
          )
        );
      } else {
        // 마지막 카드일 경우 제거
        setDeck(deck.filter((card) => card.name !== cardName));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex">
        <section className="w-1/2 p-6">
          <h2 className="text-lg font-bold mb-4">Select Character</h2>
          <ul className="flex space-x-4 mb-6">
            {characters.map((character) => (
              <li key={character}>
                <button
                  className={`px-4 py-2 rounded ${
                    selectedCharacter === character
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedCharacter(character)}
                >
                  {character}
                </button>
              </li>
            ))}
          </ul>
          {selectedCharacter && (
            <CardSelector
              character={selectedCharacter}
              onCardSelect={handleCardAdd}
            />
          )}
        </section>
        <section className="w-1/2 p-6">
          <h2 className="text-lg font-bold mb-4">Your Deck</h2>
          <DeckViewer deck={deck} onCardClick={handleCardClick} />
        </section>
      </main>
    </div>
  );
}
