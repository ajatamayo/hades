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

  const duoBoons = [
    { gods: [APHRODITE, APOLLO], boon: 'Sunny Disposition' },
    { gods: [APHRODITE, DEMETER], boon: 'Hearty Appetite' },
    { gods: [APHRODITE, HEPHAESTUS], boon: 'Soft Caress' },
    { gods: [APHRODITE, HERA], boon: 'Soul Mate' },
    { gods: [APHRODITE, HESTIA], boon: 'Burning Desire' },
    { gods: [APHRODITE, POSEIDON], boon: 'Island Getaway' },
    { gods: [APHRODITE, ZEUS], boon: 'Romantic Spark' },
    { gods: [APOLLO, DEMETER], boon: 'Torrential Downpour' },
    { gods: [APOLLO, HEPHAESTUS], boon: 'Stellar Slam' },
    { gods: [APOLLO, HERA], boon: 'Sun Worshiper' },
    { gods: [APOLLO, HESTIA], boon: 'Phoenix Skin' },
    { gods: [APOLLO, POSEIDON], boon: 'Beach Ball' },
    { gods: [APOLLO, ZEUS], boon: 'Glorious Disaster' },
    { gods: [DEMETER, HEPHAESTUS], boon: 'Room Temperature' },
    { gods: [DEMETER, HERA], boon: 'Cherished Heirloom' },
    { gods: [DEMETER, HESTIA], boon: 'Freezer Burn Home' },
    { gods: [DEMETER, POSEIDON], boon: 'Natural Selection' },
    { gods: [DEMETER, ZEUS], boon: 'Apocalyptic Storm' },
    { gods: [HEPHAESTUS, HERA], boon: 'Spiteful Strength' },
    { gods: [HEPHAESTUS, HESTIA], boon: 'Chain Reaction' },
    { gods: [HEPHAESTUS, POSEIDON], boon: 'Seismic Hammer' },
    { gods: [HEPHAESTUS, ZEUS], boon: 'Master Conductor' },
    { gods: [HERA, HESTIA], boon: 'Funeral Pyre' },
    { gods: [HERA, POSEIDON], boon: 'Golden Rule' },
    { gods: [HERA, ZEUS], boon: 'Queen\'s Ransom' },
    { gods: [HESTIA, POSEIDON], boon: 'Scalding Vapor' },
    { gods: [HESTIA, ZEUS], boon: 'Thermal Dynamics' },
    { gods: [POSEIDON, ZEUS], boon: 'Killer Current' },
    { gods: [ZEUS, HERA], boon: 'King\'s Ransom' },
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
