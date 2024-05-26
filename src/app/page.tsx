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
    { gods: [APHRODITE, DEMETER], boon: 'Flourishing Beauty' },
    { gods: [APHRODITE, HEPHAESTUS], boon: 'Fiery Passion' },
    { gods: [APHRODITE, HERA], boon: 'Royal Charm' },
    { gods: [APHRODITE, HESTIA], boon: 'Warm Embrace' },
    { gods: [APHRODITE, POSEIDON], boon: 'Wave of Love' },
    { gods: [APHRODITE, ZEUS], boon: 'Heavenly Affection' },
    { gods: [APOLLO, DEMETER], boon: 'Golden Harvest' },
    { gods: [APOLLO, HEPHAESTUS], boon: 'Radiant Forge' },
    { gods: [APOLLO, HERA], boon: 'Divine Light' },
    { gods: [APOLLO, HESTIA], boon: 'Shining Hearth' },
    { gods: [APOLLO, POSEIDON], boon: 'Sea of Sun' },
    { gods: [APOLLO, ZEUS], boon: 'Thunderous Melody' },
    { gods: [DEMETER, HEPHAESTUS], boon: 'Forged Bounty' },
    { gods: [DEMETER, HERA], boon: 'Regal Harvest' },
    { gods: [DEMETER, HESTIA], boon: 'Hearth and Home' },
    { gods: [DEMETER, POSEIDON], boon: 'Ocean’s Plenty' },
    { gods: [DEMETER, ZEUS], boon: 'Storm of Fertility' },
    { gods: [HEPHAESTUS, HERA], boon: 'Majestic Craft' },
    { gods: [HEPHAESTUS, HESTIA], boon: 'Blazing Sanctuary' },
    { gods: [HEPHAESTUS, POSEIDON], boon: 'Molten Sea' },
    { gods: [HEPHAESTUS, ZEUS], boon: 'Forge of Thunder' },
    { gods: [HERA, HESTIA], boon: 'Sacred Hearth' },
    { gods: [HERA, POSEIDON], boon: 'Royal Tide' },
    { gods: [HERA, ZEUS], boon: 'Olympian Majesty' },
    { gods: [HESTIA, POSEIDON], boon: 'Warm Waters' },
    { gods: [HESTIA, ZEUS], boon: 'Lightning Hearth' },
    { gods: [POSEIDON, ZEUS], boon: 'Tempest of Gods' },
    { gods: [ZEUS, HERA], boon: 'Olympian Majesty 2' },
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
