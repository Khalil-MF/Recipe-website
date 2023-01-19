import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './component/Recipe';

function App() {


  const [recipes,setRecipes]=useState([])
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');
  


  useEffect(()=> {getRecipes()}, [query]); 

 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_FOOD_API_ID}&app_key=${process.env.REACT_APP_FOOD_API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  }

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }



  return (
    <main>
      <div className="navbar-fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              RECIPES search bar
            </a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <form onSubmit={getSearch} className="d-flex">
                <input
                  className="form-control me-sm-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
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
    </main>
  );
}

export default App;
