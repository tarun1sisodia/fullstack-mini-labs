const cardsWrapper = document.getElementById('cardsWrapper');
const overlay = document.getElementById('overlay');
const formContainer = document.getElementById('formContainer');
const closeFormBtn = document.querySelector('.closeForm');
const submitBtn = document.querySelector('.submit-btn');
const formWarning = document.getElementById('formWarning');

// Form inputs
const imgUrlInput = document.getElementById('imgUrlInput');
const fullNameInput = document.getElementById('fullNameInput');
const homeTownInput = document.getElementById('homeTownInput');
const purposeInput = document.getElementById('purposeInput');
const categoryRadios = formContainer.querySelectorAll('input[name="category"]');

// Show modal form
function showForm() {
    overlay.style.display = 'block';
    formContainer.style.display = 'flex';
    formWarning.textContent = '';
}

// Hide modal form
function hideForm() {
    overlay.style.display = 'none';
    formContainer.style.display = 'none';
    formWarning.textContent = '';
}

// Card side button actions
function handleSideButton(e, idx) {
    if (e.target.classList.contains('btn-plus')) {
        showForm();
    }
    // ↑ and ↓ can be implemented for card reordering if needed
}

// Render cards from localStorage
function renderCards() {
    cardsWrapper.innerHTML = '';
    let cards = JSON.parse(localStorage.getItem('callCards')) || [];
    let lastThree = cards.slice(-3).reverse(); // newest on top

    lastThree.forEach((card, idx) => {
        const stackDiv = document.createElement('div');
        stackDiv.className = 'card-stack';

        const container = document.createElement('div');
        container.className = 'container';

        // Side buttons
        const sideBtns = document.createElement('div');
        sideBtns.className = 'side-buttons';
        sideBtns.innerHTML = `
            <button class="btn-plus" title="Add">+</button>
            <button class="btn-up" title="Up">↑</button>
            <button class="btn-down" title="Down">↓</button>
        `;
        sideBtns.addEventListener('click', (e) => handleSideButton(e, idx));

        // Card
        const cardDiv = document.createElement('div');
        cardDiv.className = 'call-card';
        cardDiv.innerHTML = `
            <div class="card-header">
                <div class="avatar">
                    <img src="${card.imgUrl}" alt="">
                </div>
                <div>
                    <h3>${card.fullName}</h3>
                    <p>${card.homeTown}</p>
                </div>
            </div>
            <div class="card-body">
                <div class="card-row">
                    <span>Home town</span>
                    <span>${card.homeTown}</span>
                </div>
                <div class="card-row">
                    <span>Purpose</span>
                    <span>${card.purpose}</span>
                </div>
                <div class="card-row">
                    <span>Category</span>
                    <span>${card.category}</span>
                </div>
                <div class="card-actions">
                    <button class="btn-card btn-call">📞 Call</button>
                    <button class="btn-card btn-message">Message</button>
                </div>
            </div>
        `;

        // Color dots
        const colorsDiv = document.createElement('div');
        colorsDiv.className = 'colors';
        colorsDiv.innerHTML = `
            <div class="dot black"></div>
            <div class="dot purple"></div>
            <div class="dot brown"></div>
            <div class="dot teal"></div>
        `;

        container.appendChild(sideBtns);
        container.appendChild(cardDiv);
        container.appendChild(colorsDiv);

        stackDiv.appendChild(container);
        cardsWrapper.appendChild(stackDiv);
    });
}

// Form validation and submit
formContainer.addEventListener('submit', function (evt) {
    evt.preventDefault();
    formWarning.textContent = '';

    const imgUrl = imgUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    let category = '';
    categoryRadios.forEach(radio => {
        if (radio.checked) category = radio.value;
    });

    // Validation
    if (!imgUrl) {
        formWarning.textContent = 'Please enter a valid image URL.';
        imgUrlInput.focus();
        return;
    }
    if (!fullName) {
        formWarning.textContent = 'Please enter full name.';
        fullNameInput.focus();
        return;
    }
    if (!homeTown) {
        formWarning.textContent = 'Please enter home town.';
        homeTownInput.focus();
        return;
    }
    if (!purpose) {
        formWarning.textContent = 'Please enter purpose.';
        purposeInput.focus();
        return;
    }
    if (!category) {
        formWarning.textContent = 'Please select a category.';
        return;
    }

    // Save to localStorage
    let cards = JSON.parse(localStorage.getItem('callCards')) || [];
    cards.push({ imgUrl, fullName, homeTown, purpose, category });
    localStorage.setItem('callCards', JSON.stringify(cards));

    // Reset form and UI
    formContainer.reset();
    hideForm();
    renderCards();
});

// Close form
closeFormBtn.addEventListener('click', hideForm);
overlay.addEventListener('click', hideForm);

// Initial.