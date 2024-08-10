"use client"
import React, { useState } from 'react';
import DayPage from '@/app/components/DayPage';

const dailyLogs = [
  {
    day: 1,
    date: '2024-08-01',
    activities: `Morgen: Dagen starter ofte med et kort teammøde, hvor dagens opgaver gennemgås, og eventuelle udfordringer diskuteres. Herefter vil webudvikleren typisk begynde at kode, opdatere eller vedligeholde websider. Det kan inkludere at skrive ny funktionalitet, rette fejl eller optimere kode for bedre ydeevne.

Frokost: Efter en formiddag med kodning og problemløsning er der frokostpause, hvor udvikleren får en pause fra skærmen.

Eftermiddag: Efter frokost fortsætter udvikleren med dagens opgaver. Dette kan også inkludere samarbejde med designere for at implementere visuelle ændringer, testning af nye funktioner, og møder med kunder eller andre interessenter for at afklare krav og få feedback. Ofte vil der også være tid til at opdatere dokumentation eller lære nye teknologier.

Slutning af dagen: Inden arbejdsdagen slutter, vil webudvikleren ofte gennemgå, hvad der er blevet opnået, og planlægge næste dags opgaver. Der kan også være en kort statusopdatering til resten af teamet eller projektlederen.`,
    teamMembers: 'Alice, Bob',
  },
  {
    day: 2,
    date: '2024-08-02',
    activities: 'Designed the logo and started the UI design.',
    teamMembers: 'Charlie, Eve',
  },
  // Add more days here
];


export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < dailyLogs.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-300">
      <div className="relative bg-cover p-page rounded-lg border border-accent">
        <DayPage log={dailyLogs[currentPage]} />
      </div>
      <div className="flex justify-between w-full max-w-3xl mt-8">
        <button
          onClick={handlePrevious}
          className="bg-accent text-page p-3 rounded-lg hover:scale-105 transition-transform duration-300 ease-out"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-accent text-page p-3 rounded-lg hover:scale-105 transition-transform duration-300 ease-out"
          disabled={currentPage === dailyLogs.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
