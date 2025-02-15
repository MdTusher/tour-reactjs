import React from "react";
import Tour from "./tour";

function Tours({ tours }) {
  return (
    <section>
      <h2>Our tours</h2>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
