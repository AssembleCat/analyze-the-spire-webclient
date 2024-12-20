"use client";
import { useState } from "react";
import CardSelector from "@/components/CardSelector";
import DeckViewer from "@/components/DeckViewer";

const characters = ["IRONCLAD", "SILENT", "DEFECT", "WATCHER", "COLORLESS"];

type DeckCard = {
  id: string;
  name: string;
  count: number;
  isUpgraded: boolean;
};

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [deck, setDeck] = useState<DeckCard[]>([]);

  const handleCardAdd = (cardName: string) => {
    const existingCard = deck.find(
      (card) => card.name === cardName && !card.isUpgraded
    );

    if (existingCard) {
      // 같은 이름의 비강화 카드가 있으면 count 증가
      setDeck(
        deck.map((card) =>
          card.name === cardName && !card.isUpgraded
            ? { ...card, count: card.count + 1 }
            : card
        )
      );
    } else {
      // 새로운 비강화 카드 추가
      setDeck([
        ...deck,
        {
          id: `${cardName}-${Date.now()}`, // 고유 ID 부여
          name: cardName,
          count: 1,
          isUpgraded: false,
        },
      ]);
    }
  };

  const handleCardClick = (cardName: string, isUpgraded: boolean) => {
    const existingCard = deck.find(
      (card) => card.name === cardName && card.isUpgraded === isUpgraded
    );

    if (existingCard) {
      if (!isUpgraded) {
        // 비강화 카드 클릭 -> 강화 카드로 분리
        if (existingCard.count > 1) {
          setDeck([
            ...deck.map((card) =>
              card.name === cardName && !card.isUpgraded
                ? { ...card, count: card.count - 1 }
                : card
            ),
            {
              id: `${cardName}-upgraded-${Date.now()}`,
              name: cardName,
              count: 1,
              isUpgraded: true,
            },
          ]);
        } else {
          setDeck([
            ...deck.filter(
              (card) =>
                !(card.name === cardName && card.isUpgraded === isUpgraded)
            ),
            {
              id: `${cardName}-upgraded-${Date.now()}`,
              name: cardName,
              count: 1,
              isUpgraded: true,
            },
          ]);
        }
      } else {
        // 강화된 카드 클릭 -> 개수 감소 또는 제거
        if (existingCard.count > 1) {
          setDeck(
            deck.map((card) =>
              card.name === cardName && card.isUpgraded
                ? { ...card, count: card.count - 1 }
                : card
            )
          );
        } else {
          setDeck(
            deck.filter(
              (card) =>
                !(card.name === cardName && card.isUpgraded === isUpgraded)
            )
          );
        }
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
