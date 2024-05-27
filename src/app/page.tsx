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

  const duoBoons = [
    { gods: [APHRODITE, APOLLO], boon: SUNNY_DISPOSITION },
    { gods: [APHRODITE, DEMETER], boon: HEARTY_APPETITE },
    { gods: [APHRODITE, HEPHAESTUS], boon: SOFT_CARESS },
    { gods: [APHRODITE, HERA], boon: SOUL_MATE },
    { gods: [APHRODITE, HESTIA], boon: BURNING_DESIRE },
    { gods: [APHRODITE, POSEIDON], boon: ISLAND_GETAWAY },
    { gods: [APHRODITE, ZEUS], boon: ROMANTIC_SPARK },
    { gods: [APOLLO, DEMETER], boon: TORRENTIAL_DOWNPOUR },
    { gods: [APOLLO, HEPHAESTUS], boon: STELLAR_SLAM },
    { gods: [APOLLO, HERA], boon: SUN_WORSHIPER },
    { gods: [APOLLO, HESTIA], boon: PHOENIX_SKIN },
    { gods: [APOLLO, POSEIDON], boon: BEACH_BALL },
    { gods: [APOLLO, ZEUS], boon: GLORIOUS_DISASTER },
    { gods: [DEMETER, HEPHAESTUS], boon: ROOM_TEMPERATURE },
    { gods: [DEMETER, HERA], boon: CHERISHED_HEIRLOOM },
    { gods: [DEMETER, HESTIA], boon: FREEZER_BURN },
    { gods: [DEMETER, POSEIDON], boon: NATURAL_SELECTION },
    { gods: [DEMETER, ZEUS], boon: APOCALYPTIC_STORM },
    { gods: [HEPHAESTUS, HERA], boon: SPITEFUL_STRENGTH },
    { gods: [HEPHAESTUS, HESTIA], boon: CHAIN_REACTION },
    { gods: [HEPHAESTUS, POSEIDON], boon: SEISMIC_HAMMER },
    { gods: [HEPHAESTUS, ZEUS], boon: MASTER_CONDUCTOR },
    { gods: [HERA, HESTIA], boon: FUNERAL_PYRE },
    { gods: [HERA, POSEIDON], boon: GOLDEN_RULE },
    { gods: [HERA, ZEUS], boon: QUEENS_RANSOM },
    { gods: [HESTIA, POSEIDON], boon: SCALDING_VAPOR },
    { gods: [HESTIA, ZEUS], boon: THERMAL_DYNAMICS },
    { gods: [POSEIDON, ZEUS], boon: KILLER_CURRENT },
    { gods: [ZEUS, HERA], boon: KINGS_RANSOM },
  ];

  const [selectedGods, setSelectedGods] = useState([]);

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
          Choose planned boons
        </div>
      </div>

      <div className="mb-6 grid w-full lg:max-w-5xl">
        <p className="mb-3 text-2xl font-normal">
          Slots
        </p>
      </div>
    </main>
  );
}
