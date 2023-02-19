import { useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState([])
  const [recipes, setRecipes] = useState([])
 

  // User clicks checkbox -> getIngredientsFromCheckbox function is called
                            // getIngredientsFromCheckbox function add an ingredient to the ingredients array
  // User clicks submit button -> getRecipe function is called
                            // getRecipe function calls the API and returns a list of recipe
  // Hooray!

  const getRecipe = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '70cd973e08msh6817a66ad0926f4p1cbc74jsn795cc6a8edcd',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
      
    };
    const ingredientsStr = ingredients.join("%2C")
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredientsStr}&number=5&ignorePantry=true&ranking=1`, options)
      .then(response => response.json())
      .then(response => {
        setRecipes(response)
        console.log(response)})
      .catch(err => console.error(err));
  }

  // Function that is called when checkbox is clicked
  // If checkbox is checked, add ingredient to ingredients array
  // If checkbox is unchecked, remove ingredient from ingredients array
  const getIngredientsFromCheckBox = (event) => {
    const value = event["target"]["value"];

    // console.log(event) // printing to the console, seen in F12

    if (event["target"]["checked"]) {
      setIngredients([...ingredients, value])
    } else {
      setIngredients(ingredients.filter(ingredient => ingredient !== value))
    }  
  }

  return (
    <div className="App">
      <h2 align="center">Wellness Recipe Assistant</h2>
      <h3>Check all that apply:</h3>
      
      <input type="checkbox" id="1" value="banana" onChange={(event) => {getIngredientsFromCheckBox(event)}} />
      <label for="1"> Fatigue</label><br/>
      <input type="checkbox" id="2" value="oats" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="2"> High Cholesterol</label><br/>
      <input type="checkbox" id="3" value="blueberry" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="3"> High Blood Pressure</label><br/>
      <input type="checkbox" id="4" value="fish" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="4"> Frequent headaches </label><br/>
      <input type="checkbox" id="5" value="avocado" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="5"> Bloating</label><br/>
      <input type="checkbox" id="6" value="yogurt" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="6"> Acne</label><br/>
      <input type="checkbox" id="7" value="orange" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="7"> Constipation </label><br/>
      <input type="checkbox" id="8" value="asparagus" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="8"> Stress </label><br/>
      <input type="checkbox" id="9" value="walnut" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="9"> Difficulty concentrating </label><br/>
      <input type="checkbox" id="10" value="tofu" onChange={(event) => {getIngredientsFromCheckBox(event)}}/>
      <label for="10"> Always cold </label><br/>
      <br/>
      <button onClick={getRecipe}>Get Recipe</button>

      {recipes ? 
       (<ol>
        {recipes.map((recipe) => (
          <li>
            <h4>{recipe.title}</h4>
            <img src={recipe.image}/>
          </li> 
        ))}
        <h4>Lifestyle Tip:</h4>
        <p> Drink Pocari Sweat to help maintain electrolyte balance and stay hydrated!</p>
        <p> Staying hydrated is important to staying healthy.</p>
        <img src="https://www.pocarisweat.com.sg//assets/uploads/2020/06/ee90563439e457087e1ffbc122cee4ed.jpg" alt="Pocari Image"/>
        </ol>) : null}
      
    </div>
  );
}

// if value Bike add apple ingredient

export default App;
