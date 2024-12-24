type Act = "1" | "2" | "3" | "?" | "Event" | "Monster" | "Elite" | "Boss";

interface Enemy {
  name: string;
  stage: Act[];
}

const ALL_ENEMY: Enemy[] = [
  // Act1
  { name: "2 Fungi Beasts", stage: ["1", "Monster"] },
  { name: "2 Louse", stage: ["1", "Monster"] },
  { name: "3 Louse", stage: ["1", "Monster"] },
  { name: "Exordium Thugs", stage: ["1", "Monster"] }, //Any Louse or Acid/Spike Slime (M) + Looter or Cultist or Any Slaver.
  { name: "Exordium Wildlife", stage: ["1", "Monster"] }, // 1Louse or 1Medium slime + 1Jaw worm or 1Fungi beast
  { name: "Jaw Worm", stage: ["1", "Monster"] },
  { name: "Large Slime", stage: ["1", "Monster"] },
  { name: "Lots of Slimes", stage: ["1", "Monster"] },
  { name: "Small Slimes", stage: ["1", "Monster"] },
  { name: "Blue Slaver", stage: ["1", "Monster"] },
  { name: "Red Slaver", stage: ["1", "Monster"] },
  { name: "Cultist", stage: ["1", "Monster"] },
  { name: "Gremlin Gang", stage: ["1", "Monster"] },

  { name: "3 Sentries", stage: ["1", "Elite"] },
  { name: "Gremlin Nob", stage: ["1", "Elite"] },
  { name: "Lagavulin", stage: ["1", "Elite"] },

  { name: "Slime Boss", stage: ["1", "Boss"] },
  { name: "Hexaghost", stage: ["1", "Boss"] },
  { name: "The Guardian", stage: ["1", "Boss"] },

  { name: "Lagavulin Event", stage: ["1", "Event"] },
  { name: "The Mushroom Lair", stage: ["1", "Event"] },

  // Act2
  { name: "2 Thieves", stage: ["2", "Monster"] },
  { name: "3 Byrds", stage: ["2", "Monster"] },
  { name: "3 Cultists", stage: ["2", "Monster"] },
  { name: "Looter", stage: ["2", "Monster"] },
  { name: "Snake Plant", stage: ["2", "Monster"] },
  { name: "Snecko", stage: ["2", "Monster"] },
  { name: "Centurion and Healer", stage: ["2", "Monster"] },
  { name: "Chosen", stage: ["2", "Monster"] },
  { name: "Chosen and Byrds", stage: ["2", "Monster"] },
  { name: "Cultist and Chosen", stage: ["2", "Monster"] },
  { name: "Shell Parasite", stage: ["2", "Monster"] },
  { name: "Slaver and Parasite", stage: ["2", "Monster"] },
  { name: "Spheric Guardian", stage: ["2", "Monster"] },

  { name: "Gremlin Leader", stage: ["2", "Elite"] },
  { name: "Book of Stabbing", stage: ["2", "Elite"] },
  { name: "Slavers", stage: ["2", "Elite"] },
  { name: "Automaton", stage: ["2", "Boss"] },
  { name: "Champ", stage: ["2", "Boss"] },
  { name: "Collector", stage: ["2", "Boss"] },

  { name: "Masked Bandits", stage: ["2", "Event"] },
  { name: "Colosseum Nobs", stage: ["2", "Event"] },
  { name: "Colosseum Slavers", stage: ["2", "Event"] },

  //Act3
  { name: "2 Orb Walkers", stage: ["3", "Monster"] },
  { name: "3 Darklings", stage: ["3", "Monster"] },
  { name: "3 Shapes", stage: ["3", "Monster"] },
  { name: "4 Shapes", stage: ["3", "Monster"] },
  { name: "Jaw Worm Horde", stage: ["3", "Monster"] },
  { name: "Maw", stage: ["3", "Monster"] },
  { name: "Orb Walker", stage: ["3", "Monster"] },
  { name: "Sphere and 2 Shapes", stage: ["3", "Monster"] },
  { name: "Spire Growth", stage: ["3", "Monster"] },
  { name: "Transient", stage: ["3", "Monster"] },
  { name: "Writhing Mass", stage: ["3", "Monster"] },

  { name: "Reptomancer", stage: ["3", "Elite"] },
  { name: "Giant Head", stage: ["3", "Elite"] },
  { name: "Nemesis", stage: ["3", "Elite"] },

  { name: "Awakened One", stage: ["3", "Boss"] },
  { name: "Donu and Deca", stage: ["3", "Boss"] },
  { name: "Time Eater", stage: ["3", "Boss"] },

  { name: "Mind Bloom Boss Battle", stage: ["3", "Event"] },
  { name: "Mysterious Sphere", stage: ["3", "Event"] },

  { name: "Shield and Spear", stage: ["?", "Elite"] },
  { name: "The Heart", stage: ["?", "Boss"] },

  //{ name: "4 Byrds", stage: ["2", "Monster"] },
  //{ name: "Snecko and Mystics", stage: ["2", "Monster"] },
  //{ name: "Flame Bruiser 1 Orb", stage: ["3", "Boss"] }, Reptomancer early version
  //{ name: "Flame Bruiser 2 Orb", stage: ["3", "Boss"] },
  //{ name: "Sentry and Sphere", stage: [""] },
  //{ name: "Sentry and Sphere", stage: [""] },
  //{ name: "The Eyes", stage: [""] },
  //{ name: "Apologetic Slime", stage: [""] },
];

export { ALL_ENEMY };
export type { Act, Enemy };
