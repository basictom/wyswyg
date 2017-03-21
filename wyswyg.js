var people = [
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: "1747",
      death: "1797"
    }
  },
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: "1747",
      death: "1797"
    }
  },
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: "1747",
      death: "1797"
    }
  },
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: "1747",
      death: "1797"
    }
  },
]



var userInput = document.getElementById("user-input");
var userOutput = document.getElementById("user-output");

function loopPeople(){
  userOutput.innerHTML = "";
  console.log(people);
  for(var i=0; i<people.length;i++){
    //add card
    var newCard = "";
    newCard += `<person class="card">`;
    newCard += `<header class="card-header">${people[i].title}</header>`;
    newCard += `<article class="image"><img src="${people[i].image}">`;
    newCard += `<section class="section">${people[i].name}<br />${people[i].bio}</setion>`;
    // newCard += `<footer class="card-footer">${people[i].lifespan}</footer>`;
    newCard += `</article>`;
    newCard += `</person>`;
    userOutput.innerHTML += newCard;
  }
}

loopPeople();

// document.body.addEventListener("mouseenter", loopPeople);
