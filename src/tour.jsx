import React, { useState } from "react";

function tour({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(fasle);
  return (
    <article>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 150)}...`}</p>
      <button>Book Now</button>
      <button>not interested</button>
    </article>
  );
}

export default tour;
