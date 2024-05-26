'use client';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

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
            <FaStar
              className="star"
              size={50}
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
