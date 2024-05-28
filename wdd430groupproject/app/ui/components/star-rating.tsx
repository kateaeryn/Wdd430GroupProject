'use client';
import React, { useState, useEffect } from 'react';
import {StarIcon } from '@heroicons/react/24/outline';

export default function OStars(props: any) {
  const [rating, setRating] = useState<number | null>(props.currentStar);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    setRating(props.currentStar);
  }, [props.currentStar]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const updatedRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={updatedRating}
              onClick={() => setRating(updatedRating)}
              style={{ display: 'none' }}
            />
            <StarIcon
              className="h-6 w-6 text-darkBrown"
              color={updatedRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(updatedRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
