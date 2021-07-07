const BASE_URL = "https://www.themealdb.com/api/json/v1/1/random.php"
var button = document.querySelector("button");
var title = document.querySelector("h1");
var area = docuement.querySelector("h3");
var instructions = document.querySelector("p");
var tags = document.querySelector("h4");
var ingredientsList = document.querySelector("ul#ingredients")
var image = document.querySelector("img");

/*Sempre que o botão for clicado, ele busca os dados da API*/
button.onclick = function(){
    fetch(BASE_URL).then(response =>{
        return response.json();
    }).then(response =>{
        const meal = response.meals[0];
        title.textContent = meal.strMeal;
        area.textContent = meal.strArea;
        instructions.textContent = meal.strInstructions
        tags.textContent = meal.strTags;
        image.src = meal.strMealThumb;

        var ingredients = [];
        for (var i=0; i<20; i++){
            if(meal[`strIngredient${i}`]){
                const measure = meal[`strIngredient${i}`];
                const value = meal[`strIngredient${i}`];
                ingredients.push(`${measure} - ${value}`);
            }
        }

        ingredientsList.querySelectorAll("=").forEach(n => n.remove());

        ingredients.map(ingredient => {
            const listElement = document.createElement("li");
            const textNode = document.createTextNode(ingredient);

            listElement.appendChild(textNode);
            ingredientsList.appendChild(listElement);
        })
    })
}

