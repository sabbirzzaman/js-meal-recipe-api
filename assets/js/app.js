// Load meal api
const getMeal = async () => {
  const searchKeyword = searchMeal().value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMeal(data);
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
      mealBtn.setAttribute('onclick', `getSingleMeal('${meal.idMeal}');`);

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

const getSingleMeal = async (mealId) => {
  const searchId = document.getElementById('search-form');
  const board = document.getElementById('board-container');
  const mealItems = document.getElementById('meal-container');
  const mealReload = document.getElementById('reload-id');

  searchId.textContent = '';
  board.textContent = '';
  mealItems.style.display = 'none';
  mealReload.style.display = 'block';

  url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();

  displaySingleMeal(data);
};

const displaySingleMeal = (meals) => {
  const meal = meals.meals[0];

  const singleMealDiv = document.getElementById('item-details');

  const singleMealImg = document.createElement('img');
  const singleMealHeading = document.createElement('h2');
  const singleMealDetails = document.createElement('p');

  singleMealImg.setAttribute('src', meal.strMealThumb);
  singleMealHeading.innerText = meal.strMeal;
  singleMealDetails.innerText = meal.strInstructions;

  singleMealDiv.appendChild(singleMealImg);
  singleMealDiv.appendChild(singleMealHeading);
  singleMealDiv.appendChild(singleMealDetails);
};

document.getElementById('reload-id').addEventListener('click', () => {
  location.reload()
});
