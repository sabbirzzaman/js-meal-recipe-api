console.log('haha');

const getMeal = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};

const displayMeal = (foods) => {
    foods.meals.forEach(meal => {
        console.log(meal)
    })
}