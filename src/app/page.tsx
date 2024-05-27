'use client';

import { useState } from "react";

export default function Home() {
  const APHRODITE = 'Aphrodite';
  const APOLLO = 'Apollo';
  const DEMETER = 'Demeter';
  const HEPHAESTUS = 'Hephaestus';
  const HERA = 'Hera';
  const HESTIA = 'Hestia';
  const POSEIDON = 'Poseidon';
  const ZEUS = 'Zeus';

  const gods = [
    APHRODITE,
    APOLLO,
    DEMETER,
    HEPHAESTUS,
    HERA,
    HESTIA,
    POSEIDON,
    ZEUS,
  ];

  const SUNNY_DISPOSITION = 'Sunny Disposition'
  const HEARTY_APPETITE = 'Hearty Appetite'
  const SOFT_CARESS = 'Soft Caress'
  const SOUL_MATE = 'Soul Mate'
  const BURNING_DESIRE = 'Burning Desire'
  const ISLAND_GETAWAY = 'Island Getaway'
  const ROMANTIC_SPARK = 'Romantic Spark'
  const TORRENTIAL_DOWNPOUR = 'Torrential Downpour'
  const STELLAR_SLAM = 'Stellar Slam'
  const SUN_WORSHIPER = 'Sun Worshiper'
  const PHOENIX_SKIN = 'Phoenix Skin'
  const BEACH_BALL = 'Beach Ball'
  const GLORIOUS_DISASTER = 'Glorious Disaster'
  const ROOM_TEMPERATURE = 'Room Temperature'
  const CHERISHED_HEIRLOOM = 'Cherished Heirloom'
  const FREEZER_BURN = 'Freezer Burn'
  const NATURAL_SELECTION = 'Natural Selection'
  const APOCALYPTIC_STORM = 'Apocalyptic Storm'
  const SPITEFUL_STRENGTH = 'Spiteful Strength'
  const CHAIN_REACTION = 'Chain Reaction'
  const SEISMIC_HAMMER = 'Seismic Hammer'
  const MASTER_CONDUCTOR = 'Master Conductor'
  const FUNERAL_PYRE = 'Funeral Pyre'
  const GOLDEN_RULE = 'Golden Rule'
  const QUEENS_RANSOM = 'Queen\'s Ransom'
  const SCALDING_VAPOR = 'Scalding Vapor'
  const THERMAL_DYNAMICS = 'Thermal Dynamics'
  const KILLER_CURRENT = 'Killer Current'
  const KINGS_RANSOM = 'King\'s Ransom'

  const ATTACK_SLOT = 'Attack';
  const SPECIAL_SLOT = 'Special';
  const CAST_SLOT = 'Cast';
  const DASH_SLOT = 'Dash';
  const GAIN_SLOT = 'Gain';
  const NO_SLOT = 'None';

  interface Boon {
    name: string;
    slot: string;
    god: string;
  }

  // Aphrodite Boons
  const FLUTTER_STRIKE = {
    name: 'Flutter Strike',
    slot: ATTACK_SLOT,
    god: APHRODITE,
  };
  const FLUTTER_FLOURISH = {
    name: 'Flutter Flourish',
    slot: SPECIAL_SLOT,
    god: APHRODITE,
  };
  const RAPTURE_RING = {
    name: 'Rapture Ring',
    slot: CAST_SLOT,
    god: APHRODITE,
  };
  const PASSION_DASH = {
    name: 'Passion Dash',
    slot: DASH_SLOT,
    god: APHRODITE,
  };
  const GLAMOUR_GAIN = {
    name: 'Glamour Gain',
    slot: GAIN_SLOT,
    god: APHRODITE,
  };
  const SHAMELESS_ATTITUDE = {
    name: 'Shameless Attitude',
    slot: NO_SLOT,
    god: APHRODITE,
  };
  const LIFE_AFFIRMATION = {
    name: 'Life Affirmation',
    slot: NO_SLOT,
    god: APHRODITE,
  };
  const HEALTHY_REBOUND = {
    name: 'Healthy Rebound',
    slot: NO_SLOT,
    god: APHRODITE,
  };
  const HEART_BREAKER = {
    name: 'Heart Breaker',
    slot: NO_SLOT,
    god: APHRODITE,
  }

  // Apollo Boons
  const NOVA_STRIKE = {
    name: 'Nova Strike',
    slot: ATTACK_SLOT,
    god: APOLLO,
  };
  const NOVA_FLOURISH = {
    name: 'Nova Flourish',
    slot: SPECIAL_SLOT,
    god: APOLLO,
  };
  const SOLAR_RING = {
    name: 'Solar Ring',
    slot: CAST_SLOT,
    god: APOLLO,
  };
  const BLINDING_SPRINT = {
    name: 'Blinding Sprint',
    slot: DASH_SLOT,
    god: APOLLO,
  };
  const LUCID_GAIN = {
    name: 'Lucid Gain',
    slot: GAIN_SLOT,
    god: APOLLO,
  };
  const SUPER_NOVA = {
    name: 'Super Nova',
    slot: NO_SLOT,
    god: APOLLO,
  };

  // Demeter Boons
  const ICE_STRIKE = {
    name: 'Ice Strike',
    slot: ATTACK_SLOT,
    god: DEMETER,
  };
  const ICE_FLOURISH = {
    name: 'Ice Flourish',
    slot: SPECIAL_SLOT,
    god: DEMETER,
  };
  const ARCTIC_RING = {
    name: 'Arctic Ring',
    slot: CAST_SLOT,
    god: DEMETER,
  };
  const FRIGID_SPRINT = {
    name: 'Frigid Sprint',
    slot: DASH_SLOT,
    god: DEMETER,
  };
  const TRANQUIL_GAIN = {
    name: 'Tranquil Gain',
    slot: GAIN_SLOT,
    god: DEMETER,
  };
  const PLENTIFUL_FORAGE = {
    name: 'Plentiful Forage',
    slot: NO_SLOT,
    god: DEMETER,
  };
  const WINTER_COAT = {
    name: 'Winter Coat',
    slot: NO_SLOT,
    god: DEMETER,
  };
  const COLD_STORAGE = {
    name: 'Cold Storage',
    slot: NO_SLOT,
    god: DEMETER,
  };
  const RARE_CROP = {
    name: 'Rare Crop',
    slot: NO_SLOT,
    god: DEMETER,
  };

  // Hera Boons
  const SWORN_STRIKE = {
    name: 'Sworn Strike',
    slot: ATTACK_SLOT,
    god: HERA,
  };
  const SWORN_FLOURISH = {
    name: 'Sworn Flourish',
    slot: SPECIAL_SLOT,
    god: HERA,
  };
  const ENGAGEMENT_RING = {
    name: 'Engagement Ring',
    slot: CAST_SLOT,
    god: HERA,
  };
  const NEXUS_SPRINT = {
    name: 'Nexus Sprint',
    slot: DASH_SLOT,
    god: HERA,
  };
  const BORN_GAIN = {
    name: 'Born Gain',
    slot: GAIN_SLOT,
    god: HERA,
  };
  const NASTY_COMEBACK = {
    name: 'Nasty Comeback',
    slot: NO_SLOT,
    god: HERA,
  };
  const BRAVE_FACE = {
    name: 'Brave Face',
    slot: NO_SLOT,
    god: HERA,
  };
  const KEEN_INTUITION = {
    name: 'Keen Intuition',
    slot: NO_SLOT,
    god: HERA,
  };

  // Hestia Boons
  const FLAME_STRIKE = {
    name: 'Flame Strike',
    slot: ATTACK_SLOT,
    god: HESTIA,
  };
  const FLAME_FLOURISH = {
    name: 'Flame Flourish',
    slot: SPECIAL_SLOT,
    god: HESTIA,
  };
  const SMOLDER_RING = {
    name: 'Smolder Ring',
    slot: CAST_SLOT,
    god: HESTIA,
  };
  const SOOT_SPRINT = {
    name: 'Soot Sprint',
    slot: DASH_SLOT,
    god: HESTIA,
  };
  const HEARTH_GAIN = {
    name: 'Hearth Gain',
    slot: GAIN_SLOT,
    god: HESTIA,
  };
  const FLAMMABLE_COATING = {
    name: 'Flammable Coating',
    slot: NO_SLOT,
    god: HESTIA,
  };
  const BURNT_OFFERING = {
    name: 'Burnt Offering',
    slot: NO_SLOT,
    god: HESTIA,
  };
  const SPONTANEOUS_COMBUSTION = {
    name: 'Spontaneous Combustion',
    slot: NO_SLOT,
    god: HESTIA,
  };
  const GLOWING_COAL = {
    name: 'Glowing Coal',
    slot: NO_SLOT,
    god: HESTIA,
  };
  const CONTROLLED_BURN = {
    name: 'Controlled Burn',
    slot: NO_SLOT,
    god: HESTIA,
  };

  // Hephaestus Boons
  const VOLCANIC_STRIKE = {
    name: 'Volcanic Strike',
    slot: ATTACK_SLOT,
    god: HEPHAESTUS,
  };
  const VOLCANIC_FLOURISH = {
    name: 'Volcanic Flourish',
    slot: SPECIAL_SLOT,
    god: HEPHAESTUS,
  };
  const ANVIL_RING = {
    name: 'Anvil Ring',
    slot: CAST_SLOT,
    god: HEPHAESTUS,
  };
  const SMITHY_SPRINT = {
    name: 'Smithy Sprint',
    slot: DASH_SLOT,
    god: HEPHAESTUS,
  };
  const FIXED_GAIN = {
    name: 'Fixed Gain',
    slot: GAIN_SLOT,
    god: HEPHAESTUS,
  };
  const TRUSTY_SHIELD = {
    name: 'Trusty Shield',
    slot: NO_SLOT,
    god: HEPHAESTUS,
  };
  const MINT_CONDITION = {
    name: 'Mint Condition',
    slot: NO_SLOT,
    god: HEPHAESTUS,
  };
  const HEAVY_METAL = {
    name: 'Heavy Metal',
    slot: NO_SLOT,
    god: HEPHAESTUS,
  };
  const TOUGH_TRADE = {
    name: 'Tough Trade',
    slot: NO_SLOT,
    god: HEPHAESTUS,
  };
  const UNCANNY_FORTITUDE = {
    name: 'Uncanny Fortitude',
    slot: NO_SLOT,
    god: HEPHAESTUS,
  };

  // Poseidon Boons
  const WAVE_STRIKE = {
    name: 'Wave Strike',
    slot: ATTACK_SLOT,
    god: POSEIDON,
  };
  const WAVE_FLOURISH = {
    name: 'Wave Flourish',
    slot: SPECIAL_SLOT,
    god: POSEIDON,
  };
  const GEYSER_RING = {
    name: 'Geyser Ring',
    slot: CAST_SLOT,
    god: POSEIDON,
  };
  const BREAKER_SPRINT = {
    name: 'Breaker Sprint',
    slot: DASH_SLOT,
    god: POSEIDON,
  };
  const FLUID_GAIN = {
    name: 'Fluid Gain',
    slot: GAIN_SLOT,
    god: POSEIDON,
  };
  const OCEANS_BOUNTY = {
    name: 'Ocean\'s Bounty',
    slot: NO_SLOT,
    god: POSEIDON,
  };
  const SUNKEN_TREASURE = {
    name: 'Sunken Treasure',
    slot: NO_SLOT,
    god: POSEIDON,
  };
  const DOUBLE_UP = {
    name: 'Double Up',
    slot: NO_SLOT,
    god: POSEIDON,
  };
  const SLIPPERY_SLOPE = {
    name: 'Slippery Slope',
    slot: NO_SLOT,
    god: POSEIDON,
  };

  // Zeus Boons
  const HEAVEN_STRIKE = {
    name: 'Heaven Strike',
    slot: ATTACK_SLOT,
    god: ZEUS,
  };
  const HEAVEN_FLOURISH = {
    name: 'Heaven Flourish',
    slot: SPECIAL_SLOT,
    god: ZEUS,
  };
  const STORM_RING = {
    name: 'Storm Ring',
    slot: CAST_SLOT,
    god: ZEUS,
  };
  const THUNDER_SPRINT = {
    name: 'Thunder Sprint',
    slot: DASH_SLOT,
    god: ZEUS,
  };
  const STATIC_SHOCK = {
    name: 'Static Shock',
    slot: NO_SLOT,
    god: ZEUS,
  };
  const IONIC_GAIN = {
    name: 'Ionic Gain',
    slot: GAIN_SLOT,
    god: ZEUS,
  };
  const DIVINE_VENGEANCE = {
    name: 'Divine Vengeance',
    slot: NO_SLOT,
    god: ZEUS,
  };
  const LIGHTNING_LANCE = {
    name: 'Lightning Lance',
    slot: NO_SLOT,
    god: ZEUS,
  };


  const duoBoons = [
    { gods: [APHRODITE, APOLLO], boon: SUNNY_DISPOSITION, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, SOLAR_RING, LUCID_GAIN], [HEART_BREAKER]] },
    { gods: [APHRODITE, DEMETER], boon: HEARTY_APPETITE, requirements: [[SHAMELESS_ATTITUDE, LIFE_AFFIRMATION, HEALTHY_REBOUND], [PLENTIFUL_FORAGE, WINTER_COAT]] },
    { gods: [APHRODITE, HEPHAESTUS], boon: SOFT_CARESS, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [ANVIL_RING, SMITHY_SPRINT, FIXED_GAIN]] },
    { gods: [APHRODITE, HERA], boon: SOUL_MATE, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [SWORN_STRIKE, SWORN_FLOURISH, NEXUS_SPRINT, NASTY_COMEBACK]] },
    { gods: [APHRODITE, HESTIA], boon: BURNING_DESIRE, requirements: [[RAPTURE_RING, PASSION_DASH, GLAMOUR_GAIN], [SMOLDER_RING, SOOT_SPRINT, HEARTH_GAIN]] },
    { gods: [APHRODITE, POSEIDON], boon: ISLAND_GETAWAY, requirements: [[FLUTTER_STRIKE, FLUTTER_FLOURISH], [WAVE_STRIKE, WAVE_FLOURISH, GEYSER_RING, BREAKER_SPRINT]] },
    { gods: [APHRODITE, ZEUS], boon: ROMANTIC_SPARK, requirements: [[PASSION_DASH, FLUTTER_STRIKE, FLUTTER_FLOURISH, RAPTURE_RING], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [APOLLO, DEMETER], boon: TORRENTIAL_DOWNPOUR, requirements: [[ARCTIC_RING, FRIGID_SPRINT, TRANQUIL_GAIN], [SOLAR_RING, BLINDING_SPRINT, LUCID_GAIN]] },
    { gods: [APOLLO, HEPHAESTUS], boon: STELLAR_SLAM, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, SUPER_NOVA], [VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT]] },
    { gods: [APOLLO, HERA], boon: SUN_WORSHIPER, requirements: [[SOLAR_RING, BLINDING_SPRINT, LUCID_GAIN], [ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
    { gods: [APOLLO, HESTIA], boon: PHOENIX_SKIN, requirements: [[NOVA_STRIKE, NOVA_FLOURISH, LUCID_GAIN], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING], [BURNT_OFFERING, FLAMMABLE_COATING, HEARTH_GAIN]] },
    { gods: [APOLLO, POSEIDON], boon: BEACH_BALL, requirements: [[BLINDING_SPRINT, LUCID_GAIN], [BREAKER_SPRINT, FLUID_GAIN]] },
    { gods: [APOLLO, ZEUS], boon: GLORIOUS_DISASTER, requirements: [[SOLAR_RING], [HEAVEN_STRIKE, HEAVEN_FLOURISH, THUNDER_SPRINT]] },
    { gods: [DEMETER, HEPHAESTUS], boon: ROOM_TEMPERATURE, requirements: [[ICE_STRIKE, ICE_FLOURISH], [VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT]] },
    { gods: [DEMETER, HERA], boon: CHERISHED_HEIRLOOM, requirements: [[ARCTIC_RING, FRIGID_SPRINT, TRANQUIL_GAIN], [ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
    { gods: [DEMETER, HESTIA], boon: FREEZER_BURN, requirements: [[ICE_STRIKE, ICE_FLOURISH], [FLAME_STRIKE, FLAME_FLOURISH]] },
    { gods: [DEMETER, POSEIDON], boon: NATURAL_SELECTION, requirements: [[FRIGID_SPRINT, TRANQUIL_GAIN, WINTER_COAT, COLD_STORAGE, RARE_CROP], [BREAKER_SPRINT, FLUID_GAIN, OCEANS_BOUNTY, SUNKEN_TREASURE, DOUBLE_UP]] },
    { gods: [DEMETER, ZEUS], boon: APOCALYPTIC_STORM, requirements: [[ICE_STRIKE, ICE_FLOURISH, ARCTIC_RING, FRIGID_SPRINT], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [HEPHAESTUS, HERA], boon: SPITEFUL_STRENGTH, requirements: [[TRUSTY_SHIELD, MINT_CONDITION, HEAVY_METAL, TOUGH_TRADE, UNCANNY_FORTITUDE, FIXED_GAIN], [BRAVE_FACE, NASTY_COMEBACK, KEEN_INTUITION, BORN_GAIN]] },
    { gods: [HEPHAESTUS, HESTIA], boon: CHAIN_REACTION, requirements: [[VOLCANIC_STRIKE, VOLCANIC_FLOURISH], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING]] },
    { gods: [HEPHAESTUS, POSEIDON], boon: SEISMIC_HAMMER, requirements: [[VOLCANIC_STRIKE, VOLCANIC_FLOURISH, SMITHY_SPRINT], [GEYSER_RING]] },
    { gods: [HEPHAESTUS, ZEUS], boon: MASTER_CONDUCTOR, requirements: [[FIXED_GAIN, TRUSTY_SHIELD, HEAVY_METAL, MINT_CONDITION, TOUGH_TRADE], [STATIC_SHOCK]] },
    { gods: [HERA, HESTIA], boon: FUNERAL_PYRE, requirements: [[SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, BORN_GAIN], [FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING, HEARTH_GAIN]] },
    { gods: [HERA, POSEIDON], boon: GOLDEN_RULE, requirements: [[ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN], [GEYSER_RING, BREAKER_SPRINT, FLUID_GAIN], [OCEANS_BOUNTY, DOUBLE_UP]] },
    { gods: [HERA, ZEUS], boon: QUEENS_RANSOM, requirements: [[SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN], [HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, IONIC_GAIN]] },
    { gods: [HESTIA, POSEIDON], boon: SCALDING_VAPOR, requirements: [[FLAME_STRIKE, FLAME_FLOURISH, SMOLDER_RING, SPONTANEOUS_COMBUSTION, CONTROLLED_BURN, GLOWING_COAL], [SLIPPERY_SLOPE]] },
    { gods: [HESTIA, ZEUS], boon: THERMAL_DYNAMICS, requirements: [[FLAME_STRIKE, FLAME_FLOURISH], [HEAVEN_STRIKE, HEAVEN_FLOURISH]] },
    { gods: [POSEIDON, ZEUS], boon: KILLER_CURRENT, requirements: [[SLIPPERY_SLOPE], [HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, DIVINE_VENGEANCE, LIGHTNING_LANCE]] },
    { gods: [ZEUS, HERA], boon: KINGS_RANSOM, requirements: [[HEAVEN_STRIKE, HEAVEN_FLOURISH, STORM_RING, THUNDER_SPRINT, IONIC_GAIN], [SWORN_STRIKE, SWORN_FLOURISH, ENGAGEMENT_RING, NEXUS_SPRINT, BORN_GAIN]] },
  ];

  interface Slots {
    [ATTACK_SLOT]: Boon | null;
    [SPECIAL_SLOT]: Boon | null;
    [CAST_SLOT]: Boon | null;
    [DASH_SLOT]: Boon | null;
    [GAIN_SLOT]: Boon | null;
  }

  const [selectedGods, setSelectedGods] = useState<string[]>([]);
  const [slots, setSlots] = useState<Slots>({ [ATTACK_SLOT]: null, [SPECIAL_SLOT]: null, [CAST_SLOT]: null, [DASH_SLOT]: null, [GAIN_SLOT]: null });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center text-sm lg:flex">
        <h1 className="mb-4 text-3xl font-semibold">Hades II God Pool Planner</h1>
      </div>

      <div className="mb-6 grid w-full lg:max-w-5xl">
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

      <div className="mb-6 grid w-full lg:max-w-5xl">
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

      <div className="mb-6 grid w-full lg:max-w-5xl">
        <p className="mb-3 text-2xl font-normal">
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
                {duoBoon.boon}
                <p>One of each:</p>
                <ul>
                  {duoBoon.requirements.map((requirement) => (
                    <li key={requirement.map((r) => r.name).join(', ')}>
                      <p>Boons of {requirement[0].god}:</p>
                      {
                        requirement.map((r) => (
                          <button
                            className="mr-2 mb-2 px-4 py-2 rounded-lg bg-gray-300 text-black"
                            onClick={() => {
                              setSlots(prevSlots => ({
                                ...prevSlots,
                                [r.slot]: r,
                              }))
                            }}>
                            {r.name}
                          </button>
                        ))
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="mb-6 grid w-full lg:max-w-5xl">
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
