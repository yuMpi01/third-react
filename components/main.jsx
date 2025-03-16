import React from "react";
import IngredientList from "./IngredientList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../ai";


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isRecipeShown, setIsRecipeShown] = React.useState("");
  
  function add(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipe(){
    const generatedRecipe=await getRecipeFromMistral(ingredients)
    setIsRecipeShown(generatedRecipe);
    
  }
  return (
    <main>
      <form className="add-ingredient-form" action={add}>
        <input
          type="text"
          placeholder="e.g. oregano(at least 4)"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? <IngredientList getRecipe={getRecipe} ingredients={ingredients} setIsRecipeShown={setIsRecipeShown} /> : null}
      {isRecipeShown ? <Recipe isRecipeShown={isRecipeShown} /> : null}
    </main>
  );
}
