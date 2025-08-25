"use client";
import React, { useState } from "react";

const BookSlotPage = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Slot booked successfully!");
    // You can integrate this with backend or database
  };

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#2E003E]">
          Book Your Slot
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-200"
        >
          {/* Date Picker */}
          <div>
            <label
              htmlFor="date"
              className="block font-medium mb-2 text-[#2E003E]"
            >
              Select Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label
              htmlFor="time"
              className="block font-medium mb-2 text-[#2E003E]"
            >
              Select Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-medium mb-2 text-[#2E003E]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-medium mb-2 text-[#2E003E]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="03XX-XXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block font-medium mb-2 text-[#2E003E]"
            >
              Additional Notes
            </label>
            <textarea
              name="notes"
              placeholder="Any specific reason for visit?"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-full bg-[#270949] hover:from-[#6B21A8] hover:to-[#2E003E] transition duration-300 shadow-lg"
            >
              Book Slot Now
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default BookSlotPage;
