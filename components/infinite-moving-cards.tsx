"use client";
import React from 'react';

interface CardItem {
  id: number;
  title: string;
  description: string;
  job: string;
  date: string;
}

interface InfiniteMovingCardsProps {
  items: CardItem[];
  speed?: number;
}

const InfiniteMovingCards = ({ items, speed = 20 }: InfiniteMovingCardsProps) => {
 
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative   w-full   to-[#0b0d12] overflow-hidden md:h-[30rem] 2xs:h-[25rem] ">
      {/* Left shadow overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 h-full z-10 bg-gradient-to-r from-[#0b0d12]  via-[#0b0d12b4]    to-transparent" />
      
      {/* Right shadow overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 h-full z-10 bg-gradient-to-l from-[#0b0d12] via-[#0b0d12b4] to-transparent" />
      
      {/* Cards container */}
      <div className="absolute top-0 bottom-0 items-center flex animate-infinite-scroll group">
        {/* Multiple sets of cards for seamless loop */}
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-shrink-0 w-80 h-64 m-4 rounded-xl bg-gradient-to-br from-[#0e0e1b] to-[#18192c] p-6 shadow-lg transition-all duration-500  hover:scale-101"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/90 mb-4 flex-grow">{item.description}</p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white font-medium">{item.job}</p>
                <p className="text-white/80 text-sm">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .animate-infinite-scroll {
          width: fit-content;
          animation: infinite-scroll ${speed}s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .group:hover > * {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;