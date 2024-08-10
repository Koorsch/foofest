"use client"
import React from 'react';

export default function DayPage({ log }) {
    return (
      <div className="p-6 bg-gray-800 shadow-lg rounded-lg max-w-7xl mx-auto transform hover:scale-105 transition-transform duration-300 ease-out">
        <h2 className="text-3xl font-bold font-sans text-white mb-4">Day {log.day}</h2>
        <p className="text-lg font-sans text-gray-400 mb-2">Date: {log.date}</p>
        <p className="text-lg font-sans text-green-400 mb-2">Activities:</p>
        <div className="text-sm font-sans text-gray-300 mb-4">
          {log.activities.split('\n').map((line, index) => {
            const formattedLine = line
              .replace("Morgen", "<span class='text-lg text-green-300'>Morgen</span>")
              .replace("Frokost", "<span class='text-lg text-green-300'>Frokost</span>")
              .replace("Eftermiddag", "<span class='text-lg text-green-300'>Eftermiddag</span>")
              .replace("Slutning af dagen", "<span class='text-lg text-green-300'>Slutning af dagen</span>");

            return (
              <p key={index} className="mb-2 text-gray-400" dangerouslySetInnerHTML={{ __html: formattedLine }} />
            );
          })}
        </div>
        <p className="text-lg font-sans text-green-400">Team Members: {log.teamMembers}</p>
      </div>
    );
  }
