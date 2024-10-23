const recipeForm = document.getElementById('recipe-form');
const recipeList = document.getElementById('recipe-list');
const recipesContainer = document.getElementById('recipes-container');

async function fetchRecipes() {
    const response = await fetch('http://localhost:3000/api/recipes');
    const recipes = await response.json();
    recipes.forEach(recipe => displayRecipe(recipe));
}

function displayRecipe(recipe) {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.imageUrl}" alt="${recipe.title}">
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <p><strong>Category:</strong> ${recipe.category}</p>
    `;
    recipeList.appendChild(recipeDiv);
}

recipeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split(',');
    const instructions = document.getElementById('instructions').value;
    const category = document.getElementById('category').value;
    const imageUrl = document.getElementById('imageUrl').value;

    const newRecipe = { title, ingredients, instructions, category, imageUrl };
    await fetch('http://localhost:3000/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
    });
    recipeForm.reset();
    recipeList.innerHTML = '';
    fetchRecipes();
});

document.addEventListener('DOMContentLoaded', fetchRecipes);
