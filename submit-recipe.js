document.getElementById('recipeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(ingredient => ingredient.trim());
    const instructions = document.getElementById('instructions').value;
    const image = document.getElementById('image').value;

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    const feedbackMessage = document.createElement('div');
    feedbackMessage.style.marginTop = '10px';
    document.getElementById('recipeForm').appendChild(feedbackMessage);

    try {
        const response = await fetch('/submit-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, ingredients, instructions, image }),
        });

        if (response.ok) {
            feedbackMessage.textContent = 'Recipe submitted successfully!';
            feedbackMessage.style.color = 'green';
            document.getElementById('recipeForm').reset();
        } else {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            feedbackMessage.textContent = `Error submitting recipe: ${errorText}`;
            feedbackMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Network error:', error);
        feedbackMessage.textContent = 'Network error occurred. Please try again.';
        feedbackMessage.style.color = 'red';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Recipe';
    }
});
// submit recipes js for browserec html