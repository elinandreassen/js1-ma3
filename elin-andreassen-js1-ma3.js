// Question 1
const sum = (a, b) => a - b;

// Question 2
const thisUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(thisUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        for (let i = 0; i < json.results.length; i++) {
            console.log(json.results[i].name);}
    })
    .catch(function(error) {
        document.location.href = "error.html";
    });

    
// Question 3
let catWord = "These cats are outrageous.";
catWord = catWord.replace("cats", "giraffes");


// Question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");
}

if (userId < 10) {
    document.location.href("first.html");
} else if (userId >= 10) {
    document.location.href = "second.html";

} else {
    document.location.href = "third.html";
};


// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
  container.removeChild(button);


// Question 6
function addDetails(details) {
const animals = document.querySelector(".animals");
const theCows = document.querySelector(".cows");

const addParrot = document.createElement("li");
addParrot.className = "parrot";
addParrot.innerText = "Parrot";

theCows.after(addParrot);
};


// Question 7
const getThisUrl = "https://api.rawg.io/api/games/3801";
const gamesUrl = `${getThisUrl}games/`;
const detailsUrl = `${gamesUrl}${3801}`;


fetch(detailsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const textValue = document.querySelector(".rating");
    textValue.innerText = `Rating: ${details.rating}`;
  })
  .catch(function(error) {
    console.dir(error);
  });

