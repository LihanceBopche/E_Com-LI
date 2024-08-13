// Add event listeners for button clicks
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Perform actions based on button click
        console.log('Button clicked:', button.textContent);
    });
});

// Add event listeners for category clicks
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        // Perform actions based on category click
        console.log('Category clicked:', category.textContent);
    });
});