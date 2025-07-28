// src/components/home/AchievementsSection.tsx
import React from 'react';
import { FaHeartbeat, FaUserMd, FaRegSmileBeam, FaLaptopMedical, FaUserFriends, FaRegCommentDots, FaShieldAlt, FaClock } from 'react-icons/fa';
import Button from './Button';

const stats = [
  {
    id: 1,
    title: '#1',
    description: 'Most recognized virtual care brand.*',
    icon: <FaRegSmileBeam className="text-green-600 text-4xl" />,
    more: 'See reviews'
  },
  {
    id: 2,
    title: '88%',
    description: 'Maintain or improve their blood pressure.*',
    icon: <FaHeartbeat className="text-fuchsia-600 text-4xl" />,
    more: 'Learn more'
  },
  {
    id: 3,
    title: '20+',
    description: 'Years of virtual care expertise.',
    icon: <FaLaptopMedical className="text-blue-600 text-4xl" />
  },
  {
    id: 4,
    title: '100M',
    description: 'Members in the U.S.',
    icon: <FaUserFriends className="text-indigo-600 text-4xl" />
  },
  {
    id: 5,
    title: '76%',
    description: 'People with depression feel better after 3rd visit.',
    icon: <FaRegCommentDots className="text-yellow-600 text-4xl" />
  },
  {
    id: 6,
    title: '40k+',
    description: 'Providers, therapists & coaches.',
    icon: <FaUserMd className="text-pink-600 text-4xl" />
  },
  {
    id: 7,
    title: 'Founder',
    description: 'Of first virtual care patient safety org.',
    icon: <FaShieldAlt className="text-red-600 text-4xl" />
  },
  {
    id: 8,
    title: '24/7',
    description: 'Round-the-clock access to care.',
    icon: <FaClock className="text-sky-600 text-4xl" />
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-[#FAFAFB] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[26px] md:text-3xl font-bold text-[#2E1065]">
          A high-quality care experience—anywhere, anytime
        </h2>
        <p className="text-[#4B5563] max-w-3xl mx-auto mt-4 text-base md:text-lg">
          It started with a simple yet revolutionary idea. That everyone should have access to the best healthcare anywhere in the world or the terms. That includes you.
        </p>

        <div className="mt-6">
          <Button 
            text="About Us" 
            variant="outline" 
            className="border border-[#4B0082] text-[#4B0082] px-6 py-2 rounded-full hover:bg-[#4B0082] hover:text-white transition"
          />
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ id, title, description, icon, more }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow p-6 text-left hover:shadow-xl transition-transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-full group-hover:scale-110 transition">{icon}</div>
                <div className="text-xl font-bold text-[#4B0082]">{title}</div>
              </div>
              <p className="text-sm text-gray-600">{description}</p>
              {more && (
                <p className="mt-1 text-xs text-indigo-600 underline hover:text-indigo-800">{more}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
