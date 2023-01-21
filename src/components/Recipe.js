import React from "react";
import style from './recipe.module.css';


const Recipe = ({key,title, cuisineType, image, ingredients}) => {

    return (
        <div className={style.recipe}>
          <h3>{title}</h3>
          <img 
            className={style.image}
            src={image}
            alt="img"
            width="40%"
            height="25%"
          />
            <p > Cuisine type: {cuisineType.toUpperCase()}</p>
          <ol >
            <h5>Ingredients</h5>
            {ingredients.map((ingredient) => (
              <li key={key} > ➤ {ingredient}</li>
            ))}
          </ol>
        </div>
      
    );
} 

export default Recipe ;