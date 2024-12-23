"use client";

import { useEffect, useState } from "react";
import { DECK, BASIC_CARD } from "@/type/Deck";
import DeckAndRelicViewer from "@/components/viewer/DeckAndRelicViewer";
import CardAndRelicSelector from "@/components/selector/CardAndRelicSelector";
import { BASIC_RELIC } from "@/type/Relic";

const characters = [
  "IRONCLAD",
  "SILENT",
  "DEFECT",
  "WATCHER",
  "COLORLESS",
  "CURSE",
];

type DeckCard = {
  id: string;
  name: string;
  count: number;
  isUpgraded: boolean;
};

type Relics = {
  name: string;
};

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>(
    characters[0]
  );
  const [deck, setDeck] = useState<DeckCard[]>([]);
  const [relic, setRelic] = useState<Relics[]>([]);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleCardtypeSelected(selectedCharacter);
  }, [selectedCharacter]);

  const handleCardtypeSelected = (character: string) => {
    // 선택된 카드타입이 캐릭터타입일 경우 해당 캐릭터의 기본카드를 선택
    if (character in BASIC_CARD) {
      // 캐릭터의 기본카드를 확보
      const cardNames = BASIC_CARD[character as keyof typeof BASIC_CARD];

      // DeckCard 타입에 맞춰 생성
      const deckCards: DeckCard[] = cardNames.reduce(
        (acc: DeckCard[], cardName: string) => {
          const existingCard = acc.find((card) => card.name === cardName);

          if (existingCard) {
            existingCard.count += 1;
          } else {
            acc.push({
              id: `${cardName}-${Date.now()}`,
              name: cardName,
              count: 1,
              isUpgraded: false,
            });
          }

          return acc;
        },
        []
      );

      setDeck(deckCards);
    }

    // 선택된 캐릭터의 기본 유물을 설정
    if (character in BASIC_RELIC) {
      // 캐릭터의 기본 유물을 Relics 타입 배열로 변환
      const relicName = BASIC_RELIC[character as keyof typeof BASIC_RELIC];
      const basicRelic: Relics[] = [{ name: relicName }];

      setRelic(basicRelic);
    }

    setSelectedCharacter(character);
  };

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
    // 저주카드는 클릭할 경우 무조건 제거
    const curseCard = [...DECK["CURSE"].skill];
    if (curseCard.some((card) => card.name === cardName)) {
      setDeck(deck.filter((card) => card.name !== cardName));
      return;
    }

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

  const handleRelicAdd = (relicName: string) => {
    const existingRelic = relic.find((relic) => relic.name === relicName);

    if (existingRelic) return;

    setRelic([...relic, { name: relicName }]);
  };

  const handleRelicClick = (relicName: string) => {
    setRelic([...relic.filter((relic) => relic.name !== relicName)]);
  };

  const handlePredict = async () => {
    setError(null);
    setPrediction(null);

    const transformedDeck = deck.flatMap((card) =>
      Array(card.count).fill(card.name + (card.isUpgraded ? "+1" : ""))
    );
    const transfomedRelic = relic.flatMap((relic) => relic.name);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          battle: {
            character: selectedCharacter,
            deck: transformedDeck,
            relics: transfomedRelic,
            enemy: "",
            potion_used: false,
            ascension: 20,
            floor: 10,
          },
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction.");

      const data = await response.json();
      if (typeof data.prediction === "number") {
        setPrediction((data.prediction * 100).toFixed(2));
      } else {
        throw new Error("Invalid response format.");
      }
    } catch {
      setError("Sorry Try again later");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex flex-col h-full">
        <div className="flex p-4">
          <div className="w-2/3">
            <SelectorSection
              characters={characters}
              selectedCharacter={selectedCharacter}
              onSelect={handleCardtypeSelected}
              onCardAdd={handleCardAdd}
              onRelicAdd={handleRelicAdd}
            />
          </div>
          <div className="w-1/3">
            <DeckSection
              deck={deck}
              relics={relic}
              prediction={prediction}
              error={error}
              onCardClick={handleCardClick}
              onRelicClick={handleRelicClick}
              onPredict={handlePredict}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const SelectorSection = ({
  characters,
  selectedCharacter,
  onSelect,
  onCardAdd,
  onRelicAdd,
}: {
  characters: string[];
  selectedCharacter: string;
  onSelect: (character: string) => void;
  onCardAdd: (cardName: string) => void;
  onRelicAdd: (relicName: string) => void;
}) => (
  <section className="p-6">
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-bold mb-4">Select Cardtype</h2>
      <div className="grid grid-cols-6 gap-4 mb-4 mx-2">
        {characters.map((character) => (
          <button
            key={character}
            className={`w-full px-4 py-2 border rounded ${
              selectedCharacter === character
                ? "bg-gray-300 text-black"
                : `bg-${character.toLowerCase()} text-white`
            }`}
            onClick={() => onSelect(character)}
          >
            {character}
          </button>
        ))}
      </div>
    </div>

    <CardAndRelicSelector
      character={selectedCharacter}
      onCardSelect={onCardAdd}
      onRelicSelect={onRelicAdd}
    />
  </section>
);

const DeckSection = ({
  deck,
  relics,
  prediction,
  error,
  onCardClick,
  onRelicClick,
  onPredict,
}: {
  deck: DeckCard[];
  relics: Relics[];
  prediction: string | null;
  error: string | null;
  onCardClick: (cardName: string, isUpgraded: boolean) => void;
  onRelicClick: (relicName: string) => void;
  onPredict: () => void;
}) => (
  <section className="p-6">
    <h2 className="text-lg font-bold mb-6 flex items-center justify-between">
      Your Deck
      {error && <p className="text-red-500">{error}</p>}
      {prediction && (
        <p className="text-green-600 text-xl font-bold">
          Prediction: {prediction}%
        </p>
      )}
      <button
        onClick={onPredict}
        className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-blue-700"
      >
        Predict
      </button>
    </h2>
    <DeckAndRelicViewer
      deck={deck}
      relics={relics}
      onCardClick={onCardClick}
      onRelicClick={onRelicClick}
    ></DeckAndRelicViewer>
  </section>
);
