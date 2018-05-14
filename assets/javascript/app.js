//global variables
var foodSearch = "";
var diet = "";
var health = "";
var calories = "";
var cookTime = 0;
var exFood = "";

//Materialize carousel
$( document ).ready(function(){

    //on click of the form submit, the form values will be assigned to the global variables and then passed into the queryURL. The queryURL will then be passed to the AJAX call to pull information based on the search terms
    $("#searchTerms").on("click", function(event){
        event.preventDefault();

        foodSearch = $("#foodSearch").val().trim();
        diet = $("#diet").val().trim();
        health = $("#health").val().trim();
        calories = $("#calories").val().trim();
        cookTime = $("#cookTime").val().trim();
        exFood = $("#exFood").val().trim();

        var queryURL = "https://api.edamam.com/search?app_id=42ef94b5&app_key=b1f67a4f17a704d595b115098ac477e7&q=" + foodSearch + "&diet=" + diet + "&health=" + health + "&calories=" + calories + "&time=" + cookTime + "&excluded=" + exFood;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for(var i = 0; i < 10; i++){
                var database = response.hits[i].recipe;

                var imageURL = database.image;
                // console.log(imageURL);
                var label = database.label;
                // console.log(label);
                var yield = database.yield;
                // console.log(yield);
                var calories = database.calories;
                // console.log(calories);
                var ingredients = database.ingredientLines;
                // console.log(ingredients);
                var dietLabels = database.dietLabels;
                // console.log(dietLabels);
                var healthLabels = database.healthLabels;
                // console.log(healthLabels);
                var sourceURL = database.url;
                // console.log(sourceURL);


                var recipeDiv = $("<div>");
                var recipeImg = $("<img src='" + imageURL + "' >");
                var recipeInfo = $("<h3>" + label + "</h3><p>Yield: " + yield + "</p><p>Calories: " + calories + "</p><p>Dietary Labels: " + dietLabels + "</p><p>Allergey Information: " + healthLabels + "</p><p> Ingredients: " + ingredients + "</p><p>" + sourceURL + "</p>");
                recipeDiv.append(recipeImg);
                recipeDiv.append(recipeInfo);

                $("#searchResults").append(recipeDiv);
                
                //$("#dumplocation").append(recipeDiv);
                //need to get the proper ID for the recipe dump location and test how teh informaiton looks. I believe there will be some issues to fix
            }
        });

        foodSearch = $("#foodSearch").val("");
        diet = $("#diet").val("");
        health = $("#health").val("");
        calories = $("#calories").val("");
        cookTime = $("#cookTime").val("");
        exFood = $("#exFood").val("");
        
    });

    var randomFoodArray = ["chicken", "steak", "eggs", "pasta", "broccoli", "green+beans", "fish", "pork", "desert", "strawberry", "banana", "onion", "garlic", "salt+pepper"]; 
    var randomChoice = Math.floor(Math.random() * randomFoodArray.length);
    var mainPageURL = "https://api.edamam.com/search?app_id=42ef94b5&app_key=b1f67a4f17a704d595b115098ac477e7&q=" + randomFoodArray[randomChoice] + "&from=0&to=16";
    $.ajax({
        url: mainPageURL,
        method: "GET"
    }).then(function (response) {
        for(var i = 0; i < 16; i++){
            var database = response.hits[i].recipe;

            var imageURL = database.image;
            // console.log(imageURL);
            var label = database.label;
            // console.log(label);
            var yield = database.yield;
            // console.log(yield);
            var calories = database.calories;
            // console.log(calories);
            var ingredients = database.ingredientLines;
            // console.log(ingredients);
            var dietLabels = database.dietLabels;
            // console.log(dietLabels);
            var healthLabels = database.healthLabels;
            // console.log(healthLabels);
            var sourceURL = database.url;
            // console.log(sourceURL);


            var recipeDiv = $("<div>");
            var recipeImg = $("<img src='" + imageURL + "' >");
            var recipeInfo = $("<h3>" + label + "</h3><p>Yield: " + yield + "</p><p>Calories: " + calories + "</p><p>Dietary Labels: " + dietLabels + "</p><p>Allergey Information: " + healthLabels + "</p><p> Ingredients: " + ingredients + "</p>");
            recipeDiv.append(recipeImg);
            recipeDiv.append(recipeInfo);
            
            $("#featured-recipes").append(recipeDiv);
            //need to get the proper ID for the recipe dump location and test how teh informaiton looks. I believe there will be some issues to fix
        }
    });




    $(".dropdown-trigger").dropdown();
    $('.carousel.carousel-slider').carousel();
    $('.collapsible').collapsible(); 
    var instance = M.Collapsible.getInstance(elem);
    instance.open(3);
    instance.close(3);
    instance.destroy();

});











