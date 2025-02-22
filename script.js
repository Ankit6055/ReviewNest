const nameInput = document.getElementById('name');
const reviewTitleInput = document.getElementById('review-title');
const reviewDescriptionInput = document.getElementById('review-description');
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const submitButton = document.getElementById('submit-button');
const reviewContainer = document.getElementById('review-collector-box');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const reviewTitle = reviewTitleInput.value;
    const reviewDescription = reviewDescriptionInput.value;
    const rating = ratingValue.textContent;

    if (name === '' || reviewTitle === '' || reviewDescription === '' || rating === '0') {
        alert('Please fill all fields');
        return;
    }

    // Create a new review div
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review-collector-box');

    // Generate star ratings dynamically
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
        starsHtml += '<span class="star">&#9733;</span>';
    }

    // Set the inner HTML of the new review
    reviewDiv.innerHTML = `
        <h5>${reviewTitle}</h5>
        <p class="review-text">${reviewDescription}</p>
        <p class="reviewer">
            <span class="reviewer-name">~${name}</span> 
            ${starsHtml}
        </p>
    `;

    // Append to the output box
    document.querySelector('.output-box').appendChild(reviewDiv);

    // Clear input fields after submission
    nameInput.value = '';
    reviewTitleInput.value = '';
    reviewDescriptionInput.value = '';
    ratingValue.textContent = '0';

    // Reset stars to default state
    selectedRating = 0;
    updateStars(0); // Reset stars color
});


// ******************** Star Selection ********************
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value'); // Get selected star value
        ratingValue.textContent = selectedRating; // Update text
        updateStars(selectedRating); // Update UI
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        star.classList.toggle('filled', star.getAttribute('data-value') <= rating);
    });
}