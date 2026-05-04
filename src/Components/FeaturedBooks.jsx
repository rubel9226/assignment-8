"use client";

import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);       // ✅ safe default
  const [loading, setLoading] = useState(true); // ✅ loading state
  const [error, setError] = useState(null);     // ✅ error state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          "https://assignment-8-orpin-eight.vercel.app/data.json"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await res.json();
        setBooks(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // ✅ Loading UI
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading books...
      </div>
    );
  }

  // ✅ Error UI
  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">📚 Top Generations</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {books.slice(0, 12).map((book) => (
          <SwiperSlide key={book.id} className="select-none">
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBooks;