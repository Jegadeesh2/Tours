import React, {useState} from "react";

const Tour = ({ tour, deleteTour }) => {
  const { id, name, image, info, price } = tour;
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="tour" key={id}>
      <img className="image" src={image} alt={name} />
      <footer className="description">
        <div className="info">
          <h4>{name}</h4>
          <h3 className="price">$ {price}</h3>
        </div>
        <p>{readMore ? info : `${info.substring(0,200)}... `}
        <button className="readMore" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
        </p>
        <button className="delete btn" onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
