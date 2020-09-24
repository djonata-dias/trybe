import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchMeals } from '../actions/apiRequest';
import {
  IngredientsList,
  EmbeddedVideo,
  FavoriteBtn,
  ShareBtn,
  Recommendations,
  Footer,
} from '../components';
import { fetchRec } from '../actions/recRequest';
import { returnEndpoint } from '../services/requestAPI';
import { getRouteInfo } from '../helpers';

// Função q separa as 6 primeiras recomendações caso os dados da requisição
// inicial já tenham sido armazenados na store
const getSixRecs = (drinks, sixRecs) => {
  for (let i = 0; i < drinks.length; i += 1) {
    if (i > 5) break;
    sixRecs.push(drinks[i]);
  }
};
// Get the desired object key from the recipe and returns an array
const recipeKeysToArray = (recipe, key) =>
  Object.keys(recipe)
    .filter((item) => item.startsWith(key))
    .map((item) => recipe[item])
    .filter((item) => item !== '' && item !== null);

// Returns an array of objects with ingredient/measure pairs
const getIngredients = (recipe) => {
  const ingredientsKeys = recipeKeysToArray(recipe, 'strIngredient');
  const measuresKeys = recipeKeysToArray(recipe, 'strMeasure');

  return ingredientsKeys.map((item, index) => ({
    ingredient: item,
    measure: measuresKeys[index],
  }));
};

const mealsData = (isFood, recipe) => (
  <div>
    <img
      src={isFood ? recipe.strMealThumb : recipe.strDrinkThumb}
      alt="Recipe food"
      data-testid="recipe-photo"
    />
    <h1 data-testid="recipe-title">
      {isFood ? recipe.strMeal : recipe.strDrink}
    </h1>
    <h3 data-testid="recipe-category">
      {isFood ? recipe.strCategory : recipe.strAlcoholic}
    </h3>
  </div>
);

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isFood = location.pathname.startsWith('/comidas');
  const state = useSelector((states) => states);
  const sixRecs = [];
  if (state.recommendations.data.drinks) {
    getSixRecs(state.recommendations.data.drinks, sixRecs);
  }
  useEffect(() => {
    dispatch(fetchMeals(returnEndpoint(location, 'lookup', isFood)));
    dispatch(fetchRec(returnEndpoint(location, 'search', isFood)));
  }, []);
  if (state.api.loading) return <h1>Loading...</h1>;
  const recipe = Object.values(state.api.data)[0][0];
  return (
    <div>
      {mealsData(isFood, recipe)}
      <ShareBtn />
      <FavoriteBtn />
      <IngredientsList ingredients={getIngredients} recipe={recipe} />
      <div>
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </div>
      <EmbeddedVideo isFood={isFood} recipe={recipe} />
      <div>
        {state.recommendations.loading ? (
          'Loading...'
        ) : (
          <Recommendations sixRecs={sixRecs} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailsScreen;
