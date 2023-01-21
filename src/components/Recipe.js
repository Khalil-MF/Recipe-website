import React from "react";



const Recipe = ({key,title, cuisineType, image, ingredients}) => {

    return (
      <main className="card-columns">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <img
            src={image}
            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
            alt="img"
            width="40%"
            height="25%"
          />
          <div className="card-body">
            <p className="card-text"> Cuisine type: {cuisineType.toUpperCase()}</p>
          </div>
          <ul className="list-group list-group-flush p-10 m-10">
            <h5 className="card-title">Ingredients</h5>
            {ingredients.map((ingredient) => (
              <li className="list-group-item" key={key}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </main>
    );
} 

export default Recipe ;