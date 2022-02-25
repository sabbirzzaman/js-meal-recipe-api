console.log('haha');

// Load meal api
const getMeal = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

// Display Meal Items
const displayMeal = (foods) => {
  // Select meal container
  const mealContainer = document.getElementById('all-meals');
  const mealItem = document.getElementById('item');

  foods.meals.forEach((meal) => {
    console.log(meal);

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
};
