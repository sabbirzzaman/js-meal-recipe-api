// Load meal api
const getMeal = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${
    searchMeal().value
  }`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

const searchMeal = () => {
  // Select Search Input
  const searchInput = document.getElementById('search');

  return searchInput;
};

// Display Meal Items
const displayMeal = (foods) => {
  // Select meal container
  const mealContainer = document.getElementById('all-meals');
  const mealBoard = document.getElementById('board');

  // Search keyword
  const searchInput = searchMeal();
  const keyword = searchInput.value;

  searchInput.value = '';
  mealContainer.textContent = '';

  // Add meal and text board
  if (keyword == '') {
    mealBoard.innerText = 'Please input a search keyword 🍕';
  } else if (foods.meals == null) {
    mealBoard.innerText = 'Sorry: No meal found 🥺';
  } else {
    mealBoard.innerText = `${foods.meals.length} Results for '${keyword}'`;

    foods.meals.forEach((meal) => {
      // Create Elements
      const mealDiv = document.createElement('div');
      const mealImg = document.createElement('img');
      const mealHeading = document.createElement('h3');
      const mealDescription = document.createElement('p');
      const mealBtn = document.createElement('button');

      // Class/Attribute Added
      mealDiv.classList.add('meal');
      mealImg.setAttribute('src', meal.strMealThumb);

      // Set Inner Text
      mealHeading.innerText = meal.strMeal;
      mealDescription.innerText = meal.strInstructions.slice(0, 80);
      mealBtn.innerText = 'Details';

      // Child added
      mealDiv.appendChild(mealImg);
      mealDiv.appendChild(mealHeading);
      mealDiv.appendChild(mealDescription);
      mealDiv.appendChild(mealBtn);
      mealContainer.appendChild(mealDiv);
    });
  }
};
