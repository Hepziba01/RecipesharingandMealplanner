const mealPlannerForm = document.getElementById('meal-planner-form');
const daysContainer = document.getElementById('days-container');

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function createMealInput(day) {
    const dayDiv = document.createElement('div');
    dayDiv.innerHTML = `
        <h3>${day}</h3>
        <input type="text" placeholder="Enter meal for ${day}" required>
    `;
    daysContainer.appendChild(dayDiv);
}

daysOfWeek.forEach(day => createMealInput(day));

mealPlannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add logic to save meal plans (you can implement this later)
    alert('Meal plan saved!');
});
//meal planner js
