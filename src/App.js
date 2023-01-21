import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {

  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
 

  useEffect(()=> {getRecipes()}, [query]); 

 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
            <div className="App">
              <form onSubmit={getSearch} className="search-form">
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button className="search-button" type="submit">
                  Search
                </button>
              </form> 
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cuisineType={recipe.recipe.cuisineType[0]}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
      </div>
  );
}

export default App;
