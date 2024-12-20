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

  // 카드 추가 함수 (미강화 카드일 때)
  const handleCardAdd = (cardName: string) => {
    const existingCard = deck.find(
      (card) => card.name === cardName && !card.isUpgraded
    );

    if (existingCard) {
      // 미강화 카드가 이미 있을 때: 미강화 카드 수 증가
      setDeck(
        deck.map((card) =>
          card.name === cardName && !card.isUpgraded
            ? { ...card, count: card.count + 1 }
            : card
        )
      );
    } else {
      // 미강화 카드가 없으면 새로운 미강화 카드 추가
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

  // 카드 클릭 시 동작 (강화 카드 또는 미강화 카드 변경)
  const handleCardClick = (cardName: string, isUpgraded: boolean) => {
    if (!isUpgraded) {
      // 미강화 카드를 클릭했을 때
      const existingCard = deck.find(
        (card) => card.name === cardName && !card.isUpgraded
      );

      if (existingCard && existingCard.count > 1) {
        // 미강화 카드가 여러 개 있을 때는 하나 감소하고 강화 카드 추가
        setDeck(
          deck
            .map((card) =>
              card.name === cardName && !card.isUpgraded
                ? { ...card, count: card.count - 1 }
                : card
            )
            .concat({
              id: `${cardName}-upgraded-${Date.now()}`,
              name: cardName,
              count: 1,
              isUpgraded: true,
            })
        );
      } else {
        // 미강화 카드가 하나일 때는 미강화 카드를 제거하고 강화 카드 추가
        setDeck([
          ...deck.filter(
            (card) => !(card.name === cardName && !card.isUpgraded)
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
      // 강화 카드를 클릭했을 때
      const existingCard = deck.find(
        (card) => card.name === cardName && card.isUpgraded
      );

      if (existingCard && existingCard.count > 1) {
        // 강화 카드가 여러 개 있을 때는 하나 감소하고 미강화 카드 추가
        setDeck(
          deck
            .map((card) =>
              card.name === cardName && card.isUpgraded
                ? { ...card, count: card.count - 1 }
                : card
            )
            .concat({
              id: `${cardName}-${Date.now()}`,
              name: cardName,
              count: 1,
              isUpgraded: false,
            })
        );
      } else {
        // 강화 카드가 하나일 때는 강화 카드를 제거
        setDeck(
          deck.filter((card) => !(card.name === cardName && card.isUpgraded))
        );
      }
    }
  };

  const handlePredict = async () => {
    setError(null);
    setPrediction(null);

    const transformedDeck = deck.flatMap((card) =>
      Array(card.count).fill(card.name + (card.isUpgraded ? "+1" : ""))
    );

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deck: transformedDeck }),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction.");

      const data = await response.json();
      if (typeof data.prediction === "number") {
        setPrediction((data.prediction * 100).toFixed(2));
      } else {
        throw new Error("Invalid response format.");
      }
    } catch {
      setError("Try again later");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex">
        <CharacterSelector
          characters={characters}
          selectedCharacter={selectedCharacter}
          onSelect={setSelectedCharacter}
          onCardAdd={handleCardAdd}
        />
        <DeckSection
          deck={deck}
          prediction={prediction}
          error={error}
          onCardClick={handleCardClick}
          onPredict={handlePredict}
        />
      </main>
    </div>
  );
}

const CharacterSelector = ({
  characters,
  selectedCharacter,
  onSelect,
  onCardAdd,
}: {
  characters: string[];
  selectedCharacter: string;
  onSelect: (character: string) => void;
  onCardAdd: (cardName: string) => void;
}) => (
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
            onClick={() => onSelect(character)}
          >
            {character}
          </button>
        </li>
      ))}
    </ul>
    <CardSelector character={selectedCharacter} onCardSelect={onCardAdd} />
  </section>
);

const DeckSection = ({
  deck,
  prediction,
  error,
  onCardClick,
  onPredict,
}: {
  deck: DeckCard[];
  prediction: string | null;
  error: string | null;
  onCardClick: (cardName: string, isUpgraded: boolean) => void;
  onPredict: () => void;
}) => (
  <section className="w-1/2 p-6">
    <h2 className="text-lg font-bold mb-6 flex items-center justify-between">
      Your Deck
      <button
        onClick={onPredict}
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
    <DeckViewer deck={deck} onCardClick={onCardClick} />
  </section>
);
