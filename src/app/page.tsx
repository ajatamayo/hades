'use client';

import { useState } from "react";

export default function Home() {
  enum God {
    APHRODITE = 'Aphrodite',
    APOLLO = 'Apollo',
    DEMETER = 'Demeter',
    HEPHAESTUS = 'Hephaestus',
    HERA = 'Hera',
    HESTIA = 'Hestia',
    POSEIDON = 'Poseidon',
    ZEUS = 'Zeus'
  }

  const gods = [
    God.APHRODITE,
    God.APOLLO,
    God.DEMETER,
    God.HEPHAESTUS,
    God.HERA,
    God.HESTIA,
    God.POSEIDON,
    God.ZEUS,
  ];

  const SUNNY_DISPOSITION = 'Sunny Disposition';
  const HEARTY_APPETITE = 'Hearty Appetite';
  const SOFT_CARESS = 'Soft Caress';
  const SOUL_MATE = 'Soul Mate';
  const BURNING_DESIRE = 'Burning Desire';
  const ISLAND_GETAWAY = 'Island Getaway';
  const ROMANTIC_SPARK = 'Romantic Spark';
  const TORRENTIAL_DOWNPOUR = 'Torrential Downpour';
  const STELLAR_SLAM = 'Stellar Slam';
  const SUN_WORSHIPER = 'Sun Worshiper';
  const PHOENIX_SKIN = 'Phoenix Skin';
  const BEACH_BALL = 'Beach Ball';
  const GLORIOUS_DISASTER = 'Glorious Disaster';
  const ROOM_TEMPERATURE = 'Room Temperature';
  const CHERISHED_HEIRLOOM = 'Cherished Heirloom';
  const FREEZER_BURN = 'Freezer Burn';
  const NATURAL_SELECTION = 'Natural Selection';
  const APOCALYPTIC_STORM = 'Apocalyptic Storm';
  const SPITEFUL_STRENGTH = 'Spiteful Strength';
  const CHAIN_REACTION = 'Chain Reaction';
  const SEISMIC_HAMMER = 'Seismic Hammer';
  const MASTER_CONDUCTOR = 'Master Conductor';
  const FUNERAL_PYRE = 'Funeral Pyre';
  const GOLDEN_RULE = 'Golden Rule';
  const QUEENS_RANSOM = 'Queen\'s Ransom';
  const SCALDING_VAPOR = 'Scalding Vapor';
  const THERMAL_DYNAMICS = 'Thermal Dynamics';
  const KILLER_CURRENT = 'Killer Current';
  const KINGS_RANSOM = 'King\'s Ransom';

  interface Boon {
    name: string;
    slot: string;
    god: string;
  }

  const Attack: string = 'Attack';
  const Special: string = 'Special';
  const Cast: string = 'Cast';
  const Dash: string = 'Dash';
  const Gain: string = 'Gain';

  type Slots = {
    Attack: Boon | null;
    Special: Boon | null;
    Cast: Boon | null;
    Dash: Boon | null;
    Gain: Boon | null;
  }

  const NO_SLOT = 'None';

  // Aphrodite Boons
  const FLUTTER_STRIKE: Boon = {
    name: 'Flutter Strike',
    slot: Attack,
    god: God.APHRODITE,
  };
  const FLUTTER_FLOURISH: Boon = {
    name: 'Flutter Flourish',
    slot: Special,
    god: God.APHRODITE,
  };
  const RAPTURE_RING: Boon = {
    name: 'Rapture Ring',
    slot: Cast,
    god: God.APHRODITE,
  };
  const PASSION_DASH: Boon = {
    name: 'Passion Dash',
    slot: Dash,
    god: God.APHRODITE,
  };
  const GLAMOUR_GAIN: Boon = {
    name: 'Glamour Gain',
    slot: Gain,
    god: God.APHRODITE,
  };
  const SHAMELESS_ATTITUDE: Boon = {
    name: 'Shameless Attitude',
    slot: NO_SLOT,
    god: God.APHRODITE,
  };
  const LIFE_AFFIRMATION: Boon = {
    name: 'Life Affirmation',
    slot: NO_SLOT,
    god: God.APHRODITE,
  };
  const HEALTHY_REBOUND: Boon = {
    name: 'Healthy Rebound',
    slot: NO_SLOT,
    god: God.APHRODITE,
  };
  const HEART_BREAKER: Boon = {
    name: 'Heart Breaker',
    slot: NO_SLOT,
    god: God.APHRODITE,
  }

  // Apollo Boons
  const NOVA_STRIKE: Boon = {
    name: 'Nova Strike',
    slot: Attack,
    god: God.APOLLO,
  };
  const NOVA_FLOURISH: Boon = {
    name: 'Nova Flourish',
    slot: Special,
    god: God.APOLLO,
  };
  const SOLAR_RING: Boon = {
    name: 'Solar Ring',
    slot: Cast,
    god: God.APOLLO,
  };
  const BLINDING_SPRINT: Boon = {
    name: 'Blinding Sprint',
    slot: Dash,
    god: God.APOLLO,
  };
  const LUCID_GAIN: Boon = {
    name: 'Lucid Gain',
    slot: Gain,
    god: God.APOLLO,
  };
  const SUPER_NOVA: Boon = {
    name: 'Super Nova',
    slot: NO_SLOT,
    god: God.APOLLO,
  };

  // Demeter Boons
  const ICE_STRIKE: Boon = {
    name: 'Ice Strike',
    slot: Attack,
    god: God.DEMETER,
  };
  const ICE_FLOURISH: Boon = {
    name: 'Ice Flourish',
    slot: Special,
    god: God.DEMETER,
  };
  const ARCTIC_RING: Boon = {
    name: 'Arctic Ring',
    slot: Cast,
    god: God.DEMETER,
  };
  const FRIGID_SPRINT: Boon = {
    name: 'Frigid Sprint',
    slot: Dash,
    god: God.DEMETER,
  };
  const TRANQUIL_GAIN: Boon = {
    name: 'Tranquil Gain',
    slot: Gain,
    god: God.DEMETER,
  };
  const PLENTIFUL_FORAGE: Boon = {
    name: 'Plentiful Forage',
    slot: NO_SLOT,
    god: God.DEMETER,
  };
  const WINTER_COAT: Boon = {
    name: 'Winter Coat',
    slot: NO_SLOT,
    god: God.DEMETER,
  };
  const COLD_STORAGE: Boon = {
    name: 'Cold Storage',
    slot: NO_SLOT,
    god: God.DEMETER,
  };
  const RARE_CROP: Boon = {
    name: 'Rare Crop',
    slot: NO_SLOT,
    god: God.DEMETER,
  };

  // Hera Boons
  const SWORN_STRIKE: Boon = {
    name: 'Sworn Strike',
    slot: Attack,
    god: God.HERA,
  };
  const SWORN_FLOURISH: Boon = {
    name: 'Sworn Flourish',
    slot: Special,
    god: God.HERA,
  };
  const ENGAGEMENT_RING: Boon = {
    name: 'Engagement Ring',
    slot: Cast,
    god: God.HERA,
  };
  const NEXUS_SPRINT: Boon = {
    name: 'Nexus Sprint',
    slot: Dash,
    god: God.HERA,
  };
  const BORN_GAIN: Boon = {
    name: 'Born Gain',
    slot: Gain,
    god: God.HERA,
  };
  const NASTY_COMEBACK: Boon = {
    name: 'Nasty Comeback',
    slot: NO_SLOT,
    god: God.HERA,
  };
  const BRAVE_FACE: Boon = {
    name: 'Brave Face',
    slot: NO_SLOT,
    god: God.HERA,
  };
  const KEEN_INTUITION: Boon = {
    name: 'Keen Intuition',
    slot: NO_SLOT,
    god: God.HERA,
  };

  // Hestia Boons
  const FLAME_STRIKE: Boon = {
    name: 'Flame Strike',
    slot: Attack,
    god: God.HESTIA,
  };
  const FLAME_FLOURISH: Boon = {
    name: 'Flame Flourish',
    slot: Special,
    god: God.HESTIA,
  };
  const SMOLDER_RING: Boon = {
    name: 'Smolder Ring',
    slot: Cast,
    god: God.HESTIA,
  };
  const SOOT_SPRINT: Boon = {
    name: 'Soot Sprint',
    slot: Dash,
    god: God.HESTIA,
  };
  const HEARTH_GAIN: Boon = {
    name: 'Hearth Gain',
    slot: Gain,
    god: God.HESTIA,
  };
  const FLAMMABLE_COATING: Boon = {
    name: 'Flammable Coating',
    slot: NO_SLOT,
    god: God.HESTIA,
  };
  const BURNT_OFFERING: Boon = {
    name: 'Burnt Offering',
    slot: NO_SLOT,
    god: God.HESTIA,
  };
  const SPONTANEOUS_COMBUSTION: Boon = {
    name: 'Spontaneous Combustion',
    slot: NO_SLOT,
    god: God.HESTIA,
  };
  const GLOWING_COAL: Boon = {
    name: 'Glowing Coal',
    slot: NO_SLOT,
    god: God.HESTIA,
  };
  const CONTROLLED_BURN: Boon = {
    name: 'Controlled Burn',
    slot: NO_SLOT,
    god: God.HESTIA,
  };

  // Hephaestus Boons
  const VOLCANIC_STRIKE: Boon = {
    name: 'Volcanic Strike',
    slot: Attack,
    god: God.HEPHAESTUS,
  };
  const VOLCANIC_FLOURISH: Boon = {
    name: 'Volcanic Flourish',
    slot: Special,
    god: God.HEPHAESTUS,
  };
  const ANVIL_RING: Boon = {
    name: 'Anvil Ring',
    slot: Cast,
    god: God.HEPHAESTUS,
  };
  const SMITHY_SPRINT: Boon = {
    name: 'Smithy Sprint',
    slot: Dash,
    god: God.HEPHAESTUS,
  };
  const FIXED_GAIN: Boon = {
    name: 'Fixed Gain',
    slot: Gain,
    god: God.HEPHAESTUS,
  };
  const TRUSTY_SHIELD: Boon = {
    name: 'Trusty Shield',
    slot: NO_SLOT,
    god: God.HEPHAESTUS,
  };
  const MINT_CONDITION: Boon = {
    name: 'Mint Condition',
    slot: NO_SLOT,
    god: God.HEPHAESTUS,
  };
  const HEAVY_METAL: Boon = {
    name: 'Heavy Metal',
    slot: NO_SLOT,
    god: God.HEPHAESTUS,
  };
  const TOUGH_TRADE: Boon = {
    name: 'Tough Trade',
    slot: NO_SLOT,
    god: God.HEPHAESTUS,
  };
  const UNCANNY_FORTITUDE: Boon = {
    name: 'Uncanny Fortitude',
    slot: NO_SLOT,
    god: God.HEPHAESTUS,
  };

  // Poseidon Boons
  const WAVE_STRIKE: Boon = {
    name: 'Wave Strike',
    slot: Attack,
    god: God.POSEIDON,
  };
  const WAVE_FLOURISH: Boon = {
    name: 'Wave Flourish',
    slot: Special,
    god: God.POSEIDON,
  };
  const GEYSER_RING: Boon = {
    name: 'Geyser Ring',
    slot: Cast,
    god: God.POSEIDON,
  };
  const BREAKER_SPRINT: Boon = {
    name: 'Breaker Sprint',
    slot: Dash,
    god: God.POSEIDON,
  };
  const FLUID_GAIN: Boon = {
    name: 'Fluid Gain',
    slot: Gain,
    god: God.POSEIDON,
  };
  const OCEANS_BOUNTY: Boon = {
    name: 'Ocean\'s Bounty',
    slot: NO_SLOT,
    god: God.POSEIDON,
  };
  const SUNKEN_TREASURE: Boon = {
    name: 'Sunken Treasure',
    slot: NO_SLOT,
    god: God.POSEIDON,
  };
  const DOUBLE_UP: Boon = {
    name: 'Double Up',
    slot: NO_SLOT,
    god: God.POSEIDON,
  };
  const SLIPPERY_SLOPE: Boon = {
    name: 'Slippery Slope',
    slot: NO_SLOT,
    god: God.POSEIDON,
  };

  // Zeus Boons
  const HEAVEN_STRIKE: Boon = {
    name: 'Heaven Strike',
    slot: Attack,
    god: God.ZEUS,
  };
  const HEAVEN_FLOURISH: Boon = {
    name: 'Heaven Flourish',
    slot: Special,
    god: God.ZEUS,
  };
  const STORM_RING: Boon = {
    name: 'Storm Ring',
    slot: Cast,
    god: God.ZEUS,
  };
  const THUNDER_SPRINT: Boon = {
    name: 'Thunder Sprint',
    slot: Dash,
    god: God.ZEUS,
  };
  const STATIC_SHOCK: Boon = {
    name: 'Static Shock',
    slot: NO_SLOT,
    god: God.ZEUS,
  };
  const IONIC_GAIN: Boon = {
    name: 'Ionic Gain',
    slot: Gain,
    god: God.ZEUS,
  };
  const DIVINE_VENGEANCE: Boon = {
    name: 'Divine Vengeance',
    slot: NO_SLOT,
    god: God.ZEUS,
  };
  const LIGHTNING_LANCE: Boon = {
    name: 'Lightning Lance',
    slot: NO_SLOT,
    god: God.ZEUS,
  };

  interface DuoBoon {
    gods: [God, God];
    boon: string;
    requirements: [Boon[], Boon[]];
  }

  const duoBoons = [
    { gods: [God.APHRODITE, God.APOLLO], boon: SUNNY_DISPOSITION, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, SOLAR_RING, LUCID_GAIN], [HEART_BREAKER]] },
    { gods: [God.APHRODITE, God.DEMETER], boon: HEARTY_APPETITE, requirements: [[SHAMELESS_ATTITUDE, LIFE_AFFIRMATION, HEALTHY_REBOUND], [PLENTIFUL_FORAGE, WINTER_COAT]] },
    { gods: [God.APHRODITE, God.HEPHAESTUS], boon: SOFT_CARESS, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [ANVIL_RING, SMITHY_SPRINT, FIXED_GAIN]] },
    { gods: [God.APHRODITE, God.HERA], boon: SOUL_MATE, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [SWORN_STRIKE, SWORN_FLOURISH, NEXUS_SPRINT, NASTY_COMEBACK]] },
    { gods: [God.APHRODITE, God.HESTIA], boon: BURNING_DESIRE, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [SMOLDER_RING, SOOT_SPRINT, HEARTH_GAIN]] },
    { gods: [God.APHRODITE, God.POSEIDON], boon: ISLAND_GETAWAY, requirements: [[FLUTTER_STRIKE, FLUTTER_FLOURISH], [WAVE_STRIKE, WAVE_FLOURISH, GEYSER_RING, BREAKER_SPRINT]] },
    { gods: [God.APHRODITE, God.ZEUS], boon: ROMANTIC_SPARK, requirements: [[PASSION_DASH, FLUTTER_STRIKE, FLUTTER_FLOURISH, RAPTURE_RING], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [God.APOLLO, God.DEMETER], boon: TORRENTIAL_DOWNPOUR, requirements: [[ARCTIC_RING, FRIGID_SPRINT, TRANQUIL_GAIN], [SOLAR_RING, BLINDING_SPRINT, LUCID_GAIN]] },
    { gods: [God.APOLLO, God.HEPHAESTUS], boon: STELLAR_SLAM, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, SUPER_NOVA], [VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT]] },
    { gods: [God.APOLLO, God.HERA], boon: SUN_WORSHIPER, requirements: [[SOLAR_RING, BLINDING_SPRINT, LUCID_GAIN], [ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
    { gods: [God.APOLLO, God.HESTIA], boon: PHOENIX_SKIN, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, LUCID_GAIN], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING], [BURNT_OFFERING, FLAMMABLE_COATING, HEARTH_GAIN]] },
    { gods: [God.APOLLO, God.POSEIDON], boon: BEACH_BALL, requirements: [[BLINDING_SPRINT, LUCID_GAIN], [BREAKER_SPRINT, FLUID_GAIN]] },
    { gods: [God.APOLLO, God.ZEUS], boon: GLORIOUS_DISASTER, requirements: [[SOLAR_RING], [HEAVEN_STRIKE, HEAVEN_FLOURISH, THUNDER_SPRINT]] },
    { gods: [God.DEMETER, God.HEPHAESTUS], boon: ROOM_TEMPERATURE, requirements: [[ICE_STRIKE, ICE_FLOURISH], [VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT]] },
    { gods: [God.DEMETER, God.HERA], boon: CHERISHED_HEIRLOOM, requirements: [[ARCTIC_RING, FRIGID_SPRINT, TRANQUIL_GAIN], [ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
    { gods: [God.DEMETER, God.HESTIA], boon: FREEZER_BURN, requirements: [[ICE_STRIKE, ICE_FLOURISH], [FLAME_STRIKE, FLAME_FLOURISH]] },
    { gods: [God.DEMETER, God.POSEIDON], boon: NATURAL_SELECTION, requirements: [[FRIGID_SPRINT, TRANQUIL_GAIN, WINTER_COAT, COLD_STORAGE, RARE_CROP], [BREAKER_SPRINT, FLUID_GAIN, OCEANS_BOUNTY, SUNKEN_TREASURE, DOUBLE_UP]] },
    { gods: [God.DEMETER, God.ZEUS], boon: APOCALYPTIC_STORM, requirements: [[ICE_STRIKE, ICE_FLOURISH, ARCTIC_RING, FRIGID_SPRINT], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [God.HEPHAESTUS, God.HERA], boon: SPITEFUL_STRENGTH, requirements: [[TRUSTY_SHIELD, MINT_CONDITION, HEAVY_METAL, TOUGH_TRADE, UNCANNY_FORTITUDE, FIXED_GAIN], [BRAVE_FACE, NASTY_COMEBACK, KEEN_INTUITION, BORN_GAIN]] },
    { gods: [God.HEPHAESTUS, God.HESTIA], boon: CHAIN_REACTION, requirements: [[VOLCANIC_STRIKE, VOLCANIC_FLOURISH], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING]] },
    { gods: [God.HEPHAESTUS, God.POSEIDON], boon: SEISMIC_HAMMER, requirements: [[VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT], [GEYSER_RING]] },
    { gods: [God.HEPHAESTUS, God.ZEUS], boon: MASTER_CONDUCTOR, requirements: [[FIXED_GAIN, TRUSTY_SHIELD, HEAVY_METAL, MINT_CONDITION, TOUGH_TRADE], [STATIC_SHOCK]] },
    { gods: [God.HERA, God.HESTIA], boon: FUNERAL_PYRE, requirements: [[SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, BORN_GAIN], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING, HEARTH_GAIN]] },
    { gods: [God.HERA, God.POSEIDON], boon: GOLDEN_RULE, requirements: [[ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN], [GEYSER_RING, BREAKER_SPRINT, FLUID_GAIN], [OCEANS_BOUNTY, DOUBLE_UP]] },
    { gods: [God.HERA, God.ZEUS], boon: QUEENS_RANSOM, requirements: [[SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN], [HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, IONIC_GAIN]] },
    { gods: [God.HESTIA, God.POSEIDON], boon: SCALDING_VAPOR, requirements: [[FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING, SPONTANEOUS_COMBUSTION, CONTROLLED_BURN, GLOWING_COAL], [SLIPPERY_SLOPE]] },
    { gods: [God.HESTIA, God.ZEUS], boon: THERMAL_DYNAMICS, requirements: [[FLAME_STRIKE, FLAME_FLOURISH], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [God.POSEIDON, God.ZEUS], boon: KILLER_CURRENT, requirements: [[SLIPPERY_SLOPE], [HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, DIVINE_VENGEANCE, LIGHTNING_LANCE]] },
    { gods: [God.ZEUS, God.HERA], boon: KINGS_RANSOM, requirements: [[HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, IONIC_GAIN], [SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
  ];

  const [selectedGods, setSelectedGods] = useState<string[]>([]);
  const [slots, setSlots] = useState<Slots>({
    Attack: null,
    Special: null,
    Cast: null,
    Dash: null,
    Gain: null
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center text-sm lg:flex">
        <h1 className="mb-4 text-3xl font-semibold">Hades II God Pool Planner</h1>
      </div>

      <div className="mb-4 grid w-full lg:max-w-5xl">
        <p className="mb-3 text-2xl font-normal">
          Choose 3 or 4 gods
        </p>
        <div className="flex flex-wrap">
          {gods.map((god) => (
            <button
              key={god}
              className={`mr-2 mb-2 px-4 py-2 rounded-lg ${selectedGods.includes(god) ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
              onClick={() => {
                if (selectedGods.length >= 4 && !selectedGods.includes(god)) return;
                if (selectedGods.includes(god)) {
                  setSelectedGods(selectedGods.filter((selectedGod) => selectedGod !== god));
                } else {
                  setSelectedGods([...selectedGods, god]);
                }
              }}
            >
              {god}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 grid w-full lg:max-w-5xl">
        <p className="mb-3 text-2xl font-normal">
          Duo boons available
        </p>
        <div className="flex flex-wrap">
          {
            selectedGods.length < 2 ? (
              <div className="py-2">
                Select 3 or 4 gods first
              </div>
            ) : null
          }
          {duoBoons
            .filter((duoBoon) => duoBoon.gods.every((god) => selectedGods.includes(god)))
            .map((duoBoon) => (
              <div key={duoBoon.boon} className="mr-2 mb-2 px-4 py-2 rounded-lg bg-gray-300 text-black">
                {duoBoon.boon}
              </div>
            ))}
        </div>
      </div>

      <div className="mb-4 grid w-full lg:max-w-5xl">
        <p className="mb-1 text-2xl font-normal">
          Requirements
        </p>
        <div className="py-2">
          {
            selectedGods.length < 2 ? (
              <div className="py-2">
                Select 3 or 4 gods first
              </div>
            ) : null
          }
          {duoBoons
            .filter((duoBoon) => duoBoon.gods.every((god) => selectedGods.includes(god)))
            .filter((duoBoon) => duoBoon.requirements)
            .map((duoBoon) => (
              <div key={duoBoon.boon} className="py-2">
                <p className="text-xl">{duoBoon.boon}</p>
                <p>One of each:</p>
                <ul className="ml-2">
                  {duoBoon.requirements.map((requirement) => (
                    <li key={requirement.map((r) => r.name).join(', ')}>
                      <p className="ml-4">Boons of {requirement[0].god}:</p>
                      <div className="ml-6">
                        {
                          requirement.map((r) => (
                            <button
                              key={r.name}
                              className={`mr-2 mb-2 px-4 py-2 rounded-lg bg-gray-300 text-black ${slots[r.slot] === r.name ? 'bg-blue-600 text-white' : ''}`}
                              onClick={() => {
                                if (r.slot === NO_SLOT) return;
                                setSlots(prevSlots => ({
                                  ...prevSlots,
                                  [r.slot]: r,
                                }))
                              }}>
                              {r.name}
                            </button>
                          ))
                        }
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-4 grid w-full lg:max-w-5xl">
        <p className="mb-3 text-2xl font-normal">
          Slots
        </p>
        <div className="flex flex-wrap">
          {Object.entries(slots).map(([slot, boon]) => (
            <button
              key={slot}
              className={`mr-2 mb-2 px-4 py-2 rounded-lg ${boon ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
              onClick={() => {
                if (boon) {
                  setSlots(prevSlots => ({
                    ...prevSlots,
                    [slot]: null,
                  }));
                }
              }}
            >
              {boon ? boon.name : slot}
            </button>
          ))}
        </div>
      </div>
    </main >
  );
}
