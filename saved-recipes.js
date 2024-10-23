document.addEventListener('DOMContentLoaded', () => {
    // Function to load saved recipes and meals
    async function loadSavedData() {
        try {
            const response = await fetch('/api/savedRecipes');
            const data = await response.json();

            if (data.success) {
                displaySavedRecipes(data.savedRecipes);
                displayMealPlans(data.mealPlans);
            } else {
                console.error('Failed to load saved data:', data.message);
            }
        } catch (error) {
            console.error('Error fetching saved data:', error);
        }
    }

    // Function to display saved recipes
    function displaySavedRecipes(recipes) {
        const recipesContainer = document.getElementById('recipes-container');
        recipesContainer.innerHTML = ''; // Clear previous content

        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe-item');
            recipeElement.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <img src="${recipe.image}" alt="${recipe.title}">
            `;
            recipesContainer.appendChild(recipeElement);
        });
    }

    // Function to display saved meal plans
    function displayMealPlans(meals) {
        const mealsContainer = document.getElementById('meals-container');
        mealsContainer.innerHTML = ''; // Clear previous content

        meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal-item');
            mealElement.innerHTML = `
                <h3>Meal Plan</h3>
                <p><strong>Monday:</strong> ${meal.monday}</p>
                <p><strong>Tuesday:</strong> ${meal.tuesday}</p>
                <p><strong>Wednesday:</strong> ${meal.wednesday}</p>
                <p><strong>Thursday:</strong> ${meal.thursday}</p>
                <p><strong>Friday:</strong> ${meal.friday}</p>
                <p><strong>Saturday:</strong> ${meal.saturday}</p>
                <p><strong>Sunday:</strong> ${meal.sunday}</p>
            `;
            mealsContainer.appendChild(mealElement);
        });
    }

    // Call the function to load saved data when the page loads
    loadSavedData();
});
//saved recipe
