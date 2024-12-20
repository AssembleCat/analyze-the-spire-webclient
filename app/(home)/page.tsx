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
  const [selectedCharacter, setSelectedCharacter] = useState<string>(
    characters[0]
  );
  const [deck, setDeck] = useState<DeckCard[]>([]);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCardAdd = (cardName: string) => {
    const existingCard = deck.find(
      (card) => card.name === cardName && !card.isUpgraded
    );

    if (existingCard) {
      setDeck(
        deck.map((card) =>
          card.name === cardName && !card.isUpgraded
            ? { ...card, count: card.count + 1 }
            : card
        )
      );
    } else {
      setDeck([
        ...deck,
        {
          id: `${cardName}-${Date.now()}`,
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

  const handlePredict = async () => {
    setError(null); // 이전 오류 초기화
    setPrediction(null); // 이전 예측 초기화

    const transformedDeck = deck.flatMap((card) =>
      Array(card.count).fill(card.name + (card.isUpgraded ? "+1" : ""))
    );

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deck: transformedDeck }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction.");
      }

      const data = await response.json();
      if (typeof data.prediction === "number") {
        setPrediction((data.prediction * 100).toFixed(2)); // 소수점 둘째 자리까지
      } else {
        throw new Error("Invalid response format.");
      }
    } catch (ignore) {
      setError("Try again later"); // 오류 메시지 설정
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
                      ? "bg-gray-300 text-black"
                      : `bg-${character.toLowerCase()} text-white`
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
          <h2 className="text-lg font-bold mb-6 flex items-center justify-between">
            Your Deck
            <button
              onClick={handlePredict}
              className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700"
            >
              Predict
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {prediction && (
              <p className="text-green-600 text-xl font-bold">
                Prediction: {prediction}%
              </p>
            )}
          </h2>
          <DeckViewer deck={deck} onCardClick={handleCardClick} />
        </section>
      </main>
    </div>
  );
}
