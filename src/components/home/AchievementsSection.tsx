'use client';
import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const StatsGrid = () => {
  return (
    <section className="bg-white py-5 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* COLUMN 1 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="bg-gray-50 p-6 rounded-2xl shadow text-center">
            <h3 className="text-purple-700 text-3xl font-bold">#1</h3>
            <p className="text-sm text-gray-800">Most recognized virtual care brand.*</p>
            <p className="text-sm text-purple-700 underline cursor-pointer mt-1">See reviews</p>
          </div>

          <div className="relative flex-grow rounded-2xl overflow-hidden shadow group min-h-[300px]">
            <Image
              src="/assets/combined-stats-img.png"
              alt="Trustpilot and Speaker"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <PlayCircle className="absolute text-white w-12 h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[150px]">
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center">
              <h3 className="text-purple-600 text-3xl font-bold">88%</h3>
              <p className="text-sm text-gray-700">Maintain or improve their blood pressure.*</p>
              <p className="text-xs text-purple-700 underline cursor-pointer mt-1">Learn more</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center">
              <h3 className="text-purple-600 text-3xl font-bold">20+</h3>
              <p className="text-sm text-gray-700">Years of virtual care expertise</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col md:flex-row items-center justify-between gap-4 min-h-[200px]">
            <Image
              src="/assets/doctors-laptop1.png"
              alt="Doctors using eVitals app"
              width={250}
              height={160}
              className="rounded-lg"
            />
            <div className="text-center md:text-left">
              <h3 className="text-purple-700 text-2xl font-bold mb-2">100 million+</h3>
              <p className="text-sm text-gray-700">
                Members served across the U.S. through connected care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 min-h-[220px]">
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex items-center justify-center text-center">
              <p className="text-sm text-gray-700 leading-tight">
                Founder of the first virtual care<br />
                <span className="text-purple-700 font-bold">patient safety organization</span>
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col justify-center items-center text-center">
              <h3 className="text-purple-700 text-3xl font-bold">40k+</h3>
              <p className="text-sm text-gray-700">Providers, therapists & coaches</p>
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="relative rounded-2xl overflow-hidden shadow group min-h-[200px]">
            <Image
              src="/assets/video-1.png"
              alt="Therapy session"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <PlayCircle className="absolute text-white w-12 h-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center min-h-[150px]">
            <p className="text-sm text-gray-700 leading-tight mb-1">
              76% of people with depression{' '}
              <span className="text-green-600 font-semibold">feel better</span> after their third therapy visit.*
            </p>
            <p className="text-xs text-purple-700 underline cursor-pointer">See reviews</p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow flex flex-col items-center justify-center text-center p-6 min-h-[200px]">
            <Image
              src="/assets/video-call1.png"
              alt="Remote provider call"
              width={200}
              height={150}
              className="mb-3"
            />
            <h3 className="text-purple-700 text-3xl font-bold">Remote Care</h3>
            <p className="text-sm text-gray-700">Anywhere, anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;