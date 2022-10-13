import React from "react";

const Tour = (props) => {
  //id,image,info,price,name

  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price"> $ {props.price}</h4>
        </div>
        <p> {props.info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
