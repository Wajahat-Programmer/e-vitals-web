import React from 'react';
import Image from 'next/image';
import Button from './Button';

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

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <span className="text-green-600 font-bold text-lg">#1</span>
            <p className="text-sm text-gray-600 mt-1">Most recognized virtual care brand.*<br /> See reviews.</p>
            <div className="mt-4 w-full relative h-36">
              <Image 
                src="/images/trustpilot-phone.png" 
                alt="Trustpilot Phone" 
                fill 
                className="object-contain rounded"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <span className="text-fuchsia-600 font-bold text-lg">88%</span>
            <p className="text-sm text-gray-600 mt-1">Maintain or improve their blood pressure.*<br /> Learn more.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <span className="text-blue-600 font-bold text-lg">20+</span>
            <p className="text-sm text-gray-600 mt-1">Years of virtual care expertise.</p>
            <div className="mt-4 w-full h-36 relative">
              <Image 
                src="/images/care-video-thumb.jpg"
                alt="Video Thumb"
                fill 
                className="object-cover rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white p-2 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <span className="text-indigo-600 font-bold text-lg">100 Million</span>
            <p className="text-sm text-gray-600 mt-1">Members in the U.S.</p>
            <div className="mt-4 w-full relative h-32">
              <Image 
                src="/assets/doctors-on-laptop.jpg"
                alt="Doctors on Laptop"
                fill 
                className="object-contain rounded"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <p className="text-sm text-gray-600">
              76% of people with depression feel better after their third visit with their therapist.*<br /> See reviews.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <div className="w-full relative h-36">
              <Image 
                src="/assets/video-call.jpg" 
                alt="Video Call" 
                fill 
                className="object-contain rounded"
              />
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <div className="w-full relative h-36">
              <Image 
                src="/assets/doctor-talking.jpg" 
                alt="Doctor" 
                fill 
                className="object-contain rounded"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white p-2 rounded-full shadow-md">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Founder of the first virtual care <br />
              <span className="text-blue-700 font-semibold">patient safety organization</span>
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <span className="text-pink-600 font-bold text-lg">40k+</span>
            <p className="text-sm text-gray-600 mt-1">Providers, therapists & coaches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
