export default function IngredientList(props){
    const ingredientItems = props.ingredients.map((elem) => {
        return <li key={elem}>{elem}</li>;
      });

    return(
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientItems}
          </ul>
          {props.ingredients.length >= 4 ? 
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.getRecipe} >Get a recipe</button>
              
            </div>
           : null}
        </section>
    )
}