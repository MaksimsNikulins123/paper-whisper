'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const RatingStars = () => {
  const [rating, setRating] = useState(0); // Состояние выбранной оценки
  const [hover, setHover] = useState(0); // Состояние для эффекта наведения

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 mb-8 group/stars">
        {[...Array(5)].map((_, i) => {
          const starValue = i + 1;

          // Логика закрашивания: если мы наводим, то красим до курсора,
          // иначе — до выбранного рейтинга
          const isActive = (hover || rating) >= starValue;

          return (
            <button
              key={i}
              type="button"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm transition-all"
            >
              <Star
                className={`w-4 h-4 transition-all duration-300 transform
                  ${
                    isActive
                      ? 'fill-black dark:fill-white scale-110'
                      : 'fill-transparent stroke-black dark:stroke-white opacity-30'
                  }
                  ${hover >= starValue ? 'scale-125' : 'scale-100'}
                `}
                style={{ transitionDelay: `${i * 30}ms` }}
              />
            </button>
          );
        })}
      </div>

      {/* Вспомогательный текст (опционально) */}
      <p className="text-xs text-gray-500">
        {rating > 0 ? `Ваша оценка: ${rating}` : 'Выберите оценку'}
      </p>
    </div>
  );
};

export default RatingStars;
