import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

const randomRecipe = getRandomListEntry(recipes);

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = '';
    tags.forEach(tag => {
        html += `<h2>${tag}</h2>`;
    });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`;
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating ) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
		    // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
}

function recipeTemplate(recipe) {
    return `<div class="recipes">
    <div class="image-container">
        <img src="${recipe.image}" alt="image for ${recipe.name} recipe">
    </div>
    <div class="recipe-details">
        <div class="tags">
            ${tagsTemplate(recipe.tags)}
        </div>
        <h3 class="recipe-title">${recipe.name}</h3>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe-description">${recipe.description}</p>
    </div>
</div>`;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainElement = document.querySelector('main');

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeStrings = recipeList.map(recipe => recipeTemplate(recipe)).join('');

	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = recipeStrings;
}

function filterRecipes(query) {
    const filteredList = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descMatch = recipe.description.toLowerCase().includes(query);
        const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        const ingredientMatch = recipe.recipeIngredient.find(ingregient => ingregient.toLowerCase().includes(query));

        return nameMatch || descMatch || tagMatch || ingredientMatch;
    });

    const sortedRecipes = filteredList.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(sortedRecipes);
}

function handleSearch(e) {
    e.preventDefault()

    const searchInput = document.querySelector('.search-bar input').value;
    const query = searchInput.toLowerCase();
    filterRecipes(query);
}

function init() {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', handleSearch);

    // get a random recipe
    const recipe = getRandomListEntry(recipes);

    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}

init();