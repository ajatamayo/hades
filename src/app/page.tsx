'use client';

import { useState } from "react";

export default function Home() {

  const gods = [
    'Aphrodite',
    'Apollo',
    'Demeter',
    'Hephaestus',
    'Hera',
    'Hestia',
    'Poseidon',
    'Zeus',
  ];
  const [selectedGods, setSelectedGods] = useState([]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center text-sm lg:flex">
        <h1 className="mb-4 text-3xl font-semibold">Hades II God Pool Planner</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <p className="mb-3 text-2xl font-normal">
          Choose 3 or 4 gods
        </p>
        <div className="flex flex-wrap justify-center">
          {gods.map((god) => (
            <button
              key={god}
              className={`m-1 px-4 py-2 rounded-lg ${selectedGods.includes(god) ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
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
    </main>
  );
}
