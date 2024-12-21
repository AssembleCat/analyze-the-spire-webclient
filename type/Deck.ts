type CardType = "Attack" | "Skill" | "Power";

type Rarity = "Common" | "Uncommon" | "Rare" | "Special";

type SpecialCardCategory = "Status" | "Curse";

interface Card {
  name: string;
  type: CardType;
  rarity: Rarity;
  specialCategory?: SpecialCardCategory;
}

const BASE_STATUS_CARD: Card[] = [
  { name: "Burn", type: "Skill", rarity: "Common", specialCategory: "Status" },
  { name: "Dazed", type: "Skill", rarity: "Common", specialCategory: "Status" },
  {
    name: "Slimed",
    type: "Skill",
    rarity: "Common",
    specialCategory: "Status",
  },
  { name: "Void", type: "Skill", rarity: "Common", specialCategory: "Status" },
  { name: "Wound", type: "Skill", rarity: "Common", specialCategory: "Status" },
];

const BASE_CURSE_CARD: Card[] = [
  {
    name: "AscendersBane",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  {
    name: "Clumsy",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  {
    name: "CurseOfTheBell",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  { name: "Decay", type: "Skill", rarity: "Special", specialCategory: "Curse" },
  { name: "Doubt", type: "Skill", rarity: "Special", specialCategory: "Curse" },
  {
    name: "Injury",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  {
    name: "Necronomicurse",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  {
    name: "Normality",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  { name: "Pain", type: "Skill", rarity: "Special", specialCategory: "Curse" },
  {
    name: "Parasite",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  { name: "Pride", type: "Skill", rarity: "Special", specialCategory: "Curse" },
  {
    name: "Regret",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
  { name: "Shame", type: "Skill", rarity: "Special", specialCategory: "Curse" },
  {
    name: "Writhe",
    type: "Skill",
    rarity: "Special",
    specialCategory: "Curse",
  },
];

// IRONCLAD
// 일반 공격 14장 + 타격 + 강타
const IRONCLAD_ATTACK_COMMON = [
  "Anger",
  "Bash",
  "Body Slam",
  "Clash",
  "Cleave",
  "Clothesline",
  "Headbutt",
  "Heavy Blade",
  "Iron Wave",
  "Perfected Strike",
  "Pommel Strike",
  "Strike_R",
  "Sword Boomerang",
  "Thunderclap",
  "Twin Strike",
  "Wild Strike",
];
// 특별 공격 11장
const IRONCLAD_ATTACK_UNCOMMON = [
  "Blood for Blood",
  "Carnage",
  "Dropkick",
  "Hemokinesis",
  "Pummel",
  "Rampage",
  "Reckless Charge",
  "Searing Blow",
  "Sever Soul",
  "Uppercut",
  "Whirlwind",
];
// 희귀 공격 5장
const IRONCLAD_ATTACK_RARE = [
  "Bludgeon",
  "Feed",
  "Fiend Fire",
  "Immolate",
  "Reaper",
];
// 일반 스킬 6장 + 수비
const IRONCLAD_SKILL_COMMON = [
  "Armaments",
  "Defend_R",
  "Flex",
  "Havoc",
  "Shrug It Off",
  "True Grit",
  "Warcry",
];
// 특별 스킬 17장
const IRONCLAD_SKILL_UNCOMMON = [
  "Battle Trance",
  "Bloodletting",
  "Burning Pact",
  "Disarm",
  "Dual Wield",
  "Entrench",
  "Flame Barrier",
  "Ghostly Armor",
  "Infernal Blade",
  "Intimidate",
  "Power Through",
  "Rage",
  "Second Wind",
  "Seeing Red",
  "Sentinel",
  "Shockwave",
  "Spot Weakness",
];
// 희귀 스킬 5장
const IRONCLAD_SKILL_RARE = [
  "Double Tap",
  "Exhume",
  "Impervious",
  "Limit Break",
  "Offering",
];
// 특별 파워 8장
const IRONCLAD_POWER_UNCOMMON = [
  "Combust",
  "Dark Embrace",
  "Evolve",
  "Feel No Pain",
  "Fire Breathing",
  "Inflame",
  "Metallicize",
  "Rupture",
];
// 희귀 파워 6장
const IRONCLAD_POWER_RARE = [
  "Barricade",
  "Berserk",
  "Brutality",
  "Corruption",
  "Demon Form",
  "Juggernaut",
];

// SILENT
// 일반 공격 9장 + 타격 + 약화
const SILENT_ATTACK_COMMON = [
  "Bane",
  "Dagger Spray",
  "Dagger Throw",
  "Flying Knee",
  "Neutralize",
  "Poisoned Stab",
  "Quick Slash",
  "Slice",
  "Strike_G",
  "Sucker Punch",
  "Underhanded Strike",
];
// 특별 공격 13장
const SILENT_ATTACK_UNCOMMON = [
  "All Out Attack",
  "Backstab",
  "Choke",
  "Dash",
  "Endless Agony",
  "Eviscerate",
  "Finisher",
  "Flechettes",
  "Heel Hook",
  "Masterful Stab",
  "Predator",
  "Riddle With Holes",
  "Skewer",
];
// 희귀 공격 4장
const SILENT_ATTACK_RARE = [
  "Die Die Die",
  "Glass Knife",
  "Grand Finale",
  "Unload",
];
// 일반 스킬 10장 + 수비 + 생존자
const SILENT_SKILL_COMMON = [
  "Acrobatics",
  "Backflip",
  "Blade Dance",
  "Cloak And Dagger",
  "Deadly Poison",
  "Deflect",
  "Defend_G",
  "Dodge and Roll",
  "Outmaneuver",
  "PiercingWail",
  "Prepared",
  "Survivor",
];
// 특별 스킬 14장
const SILENT_SKILL_UNCOMMON = [
  "Blur",
  "Bouncing Flask",
  "Calculated Gamble",
  "Catalyst",
  "Concentrate",
  "Crippling Poison",
  "Distraction",
  "Escape Plan",
  "Expertise",
  "Leg Sweep",
  "Reflex",
  "Setup",
  "Tactician",
  "Terror",
];
// 희귀 스킬 10장 -> Venomology 연금, Night Terror 악몽
const SILENT_SKILL_RARE = [
  "Adrenaline",
  "Bullet Time",
  "Burst",
  "Corpse Explosion",
  "Doppelganger",
  "Malaise",
  "Night Terror",
  "Phantasmal Killer",
  "Storm of Steel",
  "Venomology",
];
// 특별 파워 6장
const SILENT_POWER_UNCOMMON = [
  "Accuracy",
  "Caltrops",
  "Footwork",
  "Infinite Blades",
  "Noxious Fumes",
  "Well Laid Plans",
];
// 희귀 파워 5장
const SILENT_POWER_RARE = [
  "A Thousand Cuts",
  "After Image",
  "Envenom",
  "Tools of the Trade",
  "Wraith Form v2",
];

// DEFECT
// 일반 공격 10장 + 타격
const DEFECT_ATTACK_COMMON = [
  "Ball Lightning",
  "Barrage",
  "Beam Cell",
  "Cold Snap",
  "Compile Driver",
  "Gash",
  "Go for the Eyes",
  "Rebound",
  "Strike_B",
  "Streamline",
  "Sweeping Beam",
];
// 특별 공격 8장
const DEFECT_ATTACK_UNCOMMON = [
  "Blizzard",
  "Doom and Gloom",
  "FTL",
  "Lockon",
  "Rip and Tear",
  "Melter",
  "Scrape",
  "Sunder",
];
// 희귀 공격 5장
const DEFECT_ATTACK_RARE = [
  "All For One",
  "Core Surge",
  "Hyperbeam",
  "Meteor Strike",
  "Thunder Strike",
];
// 일반 스킬 8장 + 수비 + 이중시전 + 파지직 -> Steam 증기방벽
const DEFECT_SKILL_COMMON = [
  "Conserve Battery",
  "Coolheaded",
  "Defend_B",
  "Dualcast",
  "Hologram",
  "Leap",
  "Redo",
  "Stack",
  "Steam",
  "Turbo",
  "Zap",
];
// 특별 스킬 20장 -> Steam Power 오버클럭, Undo 평형
const DEFECT_SKILL_UNCOMMON = [
  "Aggregate",
  "Auto Shields",
  "BootSequence",
  "Chaos",
  "Chill",
  "Consume",
  "Darkness",
  "Double Energy",
  "Force Field",
  "Fusion",
  "Genetic Algorithm",
  "Glacier",
  "Recycle",
  "Reinforced Body",
  "Reprogram",
  "Skim",
  "Steam Power",
  "Tempest",
  "Undo",
  "White Noise",
];
// 희귀 스킬 6장
const DEFECT_SKILL_RARE = [
  "Amplify",
  "Fission",
  "Multi-Cast",
  "Rainbow",
  "Reboot",
  "Seek",
];
// 특별 파워 8장
const DEFECT_POWER_UNCOMMON = [
  "Capacitor",
  "Defragment",
  "Heatsinks",
  "Hello World",
  "Loop",
  "Self Repair",
  "Static Discharge",
  "Storm",
];
// 희귀 파워 6장
const DEFECT_POWER_RARE = [
  "Biased Cognition",
  "Buffer",
  "Creative AI",
  "Echo Form",
  "Electrodynamics",
  "Machine Learning",
];

// WATCHER
// 일반 공격 10장 + 티격 + 진노
const WATCHER_ATTACK_COMMON = [
  "BowlingBash",
  "Consecrate",
  "CrushJoints",
  "CutThroughFate",
  "EmptyFist",
  "Eruption",
  "FlurryOfBlows",
  "FlyingSleeves",
  "FollowUp",
  "JustLucky",
  "SashWhip",
  "Strike_P",
];
// 특별 공격 12장
const WATCHER_ATTACK_UNCOMMON = [
  "CarveReality",
  "Conclude",
  "FearNoEvil",
  "ReachHeaven",
  "SandsOfTime",
  "SignatureMove",
  "TalkToTheHand",
  "Tantrum",
  "Wallop",
  "Weave",
  "WheelKick",
  "WindmillStrike",
];
// 희귀 공격 3장
const WATCHER_ATTACK_RARE = ["Brilliance", "LessonLearned", "Ragnarok"];
// 일반 스킬 9장 + 수비 + 경각
const WATCHER_SKILL_COMMON = [
  "ClearTheMind",
  "Crescendo",
  "Defend_P",
  "EmptyBody",
  "Evaluate",
  "Halt",
  "PathToVictory",
  "Prostrate",
  "Protect",
  "ThirdEye",
  "Vigilance",
];
// 특별 스킬 15장
const WATCHER_SKILL_UNCOMMON = [
  "Blasphemy",
  "Collect",
  "DeceiveReality",
  "EmptyMind",
  "ForeignInfluence",
  "Indignation",
  "InnerPeace",
  "Meditate",
  "Perseverance",
  "Pray",
  "Sanctity",
  "Swivel",
  "WaveOfTheHand",
  "Worship",
  "WreathOfFlame",
];
// 희귀 스킬 10장 -> Vengeance 신성모독
// Wish choice = [BecomeAlmighty, FameAndFortune, LiveForever]
const WATCHER_SKILL_RARE = [
  "Alpha",
  "ConjureBlade",
  "DeusExMachina",
  "Judgement",
  "Omniscience",
  "Scrawl",
  "SpiritShield",
  "Vault",
  "Vengeance",
  "Wish",
];
// 특별 파워 8장 -> Adaptation 추월, Wireheading 예지
const WATCHER_POWER_UNCOMMON = [
  "Adaptation",
  "BattleHymn",
  "Fasting2",
  "LikeWater",
  "MentalFortress",
  "Nirvana",
  "Study",
  "Wireheading",
];
// 희귀 파워 4장
const WATCHER_POWER_RARE = [
  "DevaForm",
  "Devotion",
  "Establishment",
  "MasterReality",
];

// COLORLESS
// 특별 공격 4장
const COLORLESS_ATTACK_UNCOMMON = [
  "Dramatic Entrance",
  "Flash of Steel",
  "Mind Blast",
  "Swift Strike",
];
// 희귀 공격 1장
const COLORLESS_ATTACK_RARE = ["HandOfGreed"];
// 스페셜 공격 6장
const COLORLESS_ATTACK_SPECIAL = [
  "Bite",
  "Expunger",
  "RitualDagger",
  "Shiv",
  "Smite",
  "ThroughViolence",
];
// 특별 스킬 16장
const COLORLESS_SKILL_UNCOMMON = [
  "Bandage Up",
  "Blind",
  "Dark Shackles",
  "Deep Breath",
  "Discovery",
  "Enlightenment",
  "Finesse",
  "Forethought",
  "Good Instincts",
  "Impatience",
  "Jack Of All Trades",
  "Madness",
  "Panacea",
  "PanicButton",
  "Purity",
  "Trip",
];
// 희귀 스킬 10장
const COLORLESS_SKILL_RARE = [
  "Apotheosis",
  "Chrysalis",
  "Master of Strategy",
  "Metamorphosis",
  "Secret Technique",
  "Secret Weapon",
  "The Bomb",
  "Thinking Ahead",
  "Transmutation",
  "Violence",
];
// 스페셜 스킬 6장 -> Ghostly 유체화
const COLORLESS_SKILL_SPECIAL = [
  "Beta",
  "Ghostly",
  "Insight",
  "J.A.X.",
  "Miracle",
  "Safety",
];
// 희귀 파워 4장
const COLORLESS_POWER_RARE = [
  "Magnetism",
  "Mayhem",
  "Panache",
  "Sadistic Nature",
];
// 스페셜 파워 1장
const COLORLESS_POWER_SPECIAL = ["Omega"];

const BASIC_CARD = {
  IRONCLAD: [
    "AscendersBane",
    "Strike_R",
    "Strike_R",
    "Strike_R",
    "Strike_R",
    "Strike_R",
    "Defend_R",
    "Defend_R",
    "Defend_R",
    "Defend_R",
    "Bash",
  ],
  SILENT: [
    "AscendersBane",
    "Strike_G",
    "Strike_G",
    "Strike_G",
    "Strike_G",
    "Strike_G",
    "Defend_G",
    "Defend_G",
    "Defend_G",
    "Defend_G",
    "Defend_G",
    "Survivor",
    "Neutralize",
  ],
  DEFECT: [
    "AscendersBane",
    "Strike_B",
    "Strike_B",
    "Strike_B",
    "Strike_B",
    "Defend_B",
    "Defend_B",
    "Defend_B",
    "Defend_B",
    "Dualcast",
    "Zap",
  ],
  WATCHER: [
    "AscendersBane",
    "Strike_P",
    "Strike_P",
    "Strike_P",
    "Strike_P",
    "Defend_P",
    "Defend_P",
    "Defend_P",
    "Defend_P",
    "Eruption",
    "Vigilance",
  ],
};

interface Deck {
  [key: string]: {
    attack: Card[];
    skill: Card[];
    power: Card[];
    special?: {
      attack?: Card[];
      skill?: Card[];
      power?: Card[];
    };
  };
}

const DECK: Deck = {
  IRONCLAD: {
    attack: [
      ...IRONCLAD_ATTACK_COMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Common" } as Card)
      ),
      ...IRONCLAD_ATTACK_UNCOMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Uncommon" } as Card)
      ),
      ...IRONCLAD_ATTACK_RARE.map(
        (name) => ({ name, type: "Attack", rarity: "Rare" } as Card)
      ),
    ],
    skill: [
      ...IRONCLAD_SKILL_COMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Common" } as Card)
      ),
      ...IRONCLAD_SKILL_UNCOMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Uncommon" } as Card)
      ),
      ...IRONCLAD_SKILL_RARE.map(
        (name) => ({ name, type: "Skill", rarity: "Rare" } as Card)
      ),
    ],
    power: [
      ...IRONCLAD_POWER_UNCOMMON.map(
        (name) => ({ name, type: "Power", rarity: "Uncommon" } as Card)
      ),
      ...IRONCLAD_POWER_RARE.map(
        (name) => ({ name, type: "Power", rarity: "Rare" } as Card)
      ),
    ],
  },

  SILENT: {
    attack: [
      ...SILENT_ATTACK_COMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Common" } as Card)
      ),
      ...SILENT_ATTACK_UNCOMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Uncommon" } as Card)
      ),
      ...SILENT_ATTACK_RARE.map(
        (name) => ({ name, type: "Attack", rarity: "Rare" } as Card)
      ),
    ],
    skill: [
      ...SILENT_SKILL_COMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Common" } as Card)
      ),
      ...SILENT_SKILL_UNCOMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Uncommon" } as Card)
      ),
      ...SILENT_SKILL_RARE.map(
        (name) => ({ name, type: "Skill", rarity: "Rare" } as Card)
      ),
    ],
    power: [
      ...SILENT_POWER_UNCOMMON.map(
        (name) => ({ name, type: "Power", rarity: "Uncommon" } as Card)
      ),
      ...SILENT_POWER_RARE.map(
        (name) => ({ name, type: "Power", rarity: "Rare" } as Card)
      ),
    ],
  },

  DEFECT: {
    attack: [
      ...DEFECT_ATTACK_COMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Common" } as Card)
      ),
      ...DEFECT_ATTACK_UNCOMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Uncommon" } as Card)
      ),
      ...DEFECT_ATTACK_RARE.map(
        (name) => ({ name, type: "Attack", rarity: "Rare" } as Card)
      ),
    ],
    skill: [
      ...DEFECT_SKILL_COMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Common" } as Card)
      ),
      ...DEFECT_SKILL_UNCOMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Uncommon" } as Card)
      ),
      ...DEFECT_SKILL_RARE.map(
        (name) => ({ name, type: "Skill", rarity: "Rare" } as Card)
      ),
    ],
    power: [
      ...DEFECT_POWER_UNCOMMON.map(
        (name) => ({ name, type: "Power", rarity: "Uncommon" } as Card)
      ),
      ...DEFECT_POWER_RARE.map(
        (name) => ({ name, type: "Power", rarity: "Rare" } as Card)
      ),
    ],
  },

  WATCHER: {
    attack: [
      ...WATCHER_ATTACK_COMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Common" } as Card)
      ),
      ...WATCHER_ATTACK_UNCOMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Uncommon" } as Card)
      ),
      ...WATCHER_ATTACK_RARE.map(
        (name) => ({ name, type: "Attack", rarity: "Rare" } as Card)
      ),
    ],
    skill: [
      ...WATCHER_SKILL_COMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Common" } as Card)
      ),
      ...WATCHER_SKILL_UNCOMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Uncommon" } as Card)
      ),
      ...WATCHER_SKILL_RARE.map(
        (name) => ({ name, type: "Skill", rarity: "Rare" } as Card)
      ),
    ],
    power: [
      ...WATCHER_POWER_UNCOMMON.map(
        (name) => ({ name, type: "Power", rarity: "Uncommon" } as Card)
      ),
      ...WATCHER_POWER_RARE.map(
        (name) => ({ name, type: "Power", rarity: "Rare" } as Card)
      ),
    ],
  },

  COLORLESS: {
    attack: [
      ...COLORLESS_ATTACK_UNCOMMON.map(
        (name) => ({ name, type: "Attack", rarity: "Uncommon" } as Card)
      ),
      ...COLORLESS_ATTACK_RARE.map(
        (name) => ({ name, type: "Attack", rarity: "Rare" } as Card)
      ),
      ...COLORLESS_ATTACK_SPECIAL.map(
        (name) => ({ name, type: "Attack", rarity: "Special" } as Card)
      ),
    ],
    skill: [
      ...COLORLESS_SKILL_UNCOMMON.map(
        (name) => ({ name, type: "Skill", rarity: "Uncommon" } as Card)
      ),
      ...COLORLESS_SKILL_RARE.map(
        (name) => ({ name, type: "Skill", rarity: "Rare" } as Card)
      ),
      ...COLORLESS_SKILL_SPECIAL.map(
        (name) => ({ name, type: "Skill", rarity: "Special" } as Card)
      ),
    ],
    power: [
      ...COLORLESS_POWER_RARE.map(
        (name) => ({ name, type: "Power", rarity: "Rare" } as Card)
      ),
      ...COLORLESS_POWER_SPECIAL.map(
        (name) => ({ name, type: "Power", rarity: "Special" } as Card)
      ),
    ],
  },
  CURSE: {
    attack: [],
    skill: [...BASE_CURSE_CARD],
    power: [],
  },
};

export { DECK, BASE_STATUS_CARD, BASE_CURSE_CARD, BASIC_CARD };
export type { Rarity, CardType };
