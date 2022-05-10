import React from 'react'

const StarRating = ({ personal_rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <a
              key={index}
              className={index <= personal_rating ? "on" : "off"}>
              <span className="star">&#9733;</span>
            </a>
          );
        })}
      </div>
    );
  };
export default StarRating
