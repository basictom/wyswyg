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
  // console.log(people);
  for(var i=0; i<people.length;i++){
    //add card
    var newCard = "";
    newCard += `<div class="card" id="card-${[i]}">`;
    newCard += `<header class="card-header child">${people[i].title}</header>`;
    newCard += `<article class="image child"><img class="grand-child" src="${people[i].image}">`;
    newCard += `<section class="section grand-child">${people[i].name}<br /><p class="great-grand-child">${people[i].bio}</p></setion>`;
    // newCard += `<footer class="card-footer">${people[i].lifespan}</footer>`;
    newCard += `</article>`;
    newCard += `</div>`;
    userOutput.innerHTML += newCard;
  }
}

loopPeople();

function addBorder(e){
  removeBorder();
  if(e.target.classList.contains("card")){
    selectedBio = e.target.childNodes[1].childNodes[1].childNodes[2];
    // e.target.childNodes[2].innerHTML = userInput;
    // console.log("main card", e.target.childNodes);
    e.target.classList.toggle("yellow-border");
  }else if(e.target.classList.contains("child")){
    e.target.parentNode.classList.toggle("yellow-border");
    selectedBio = e.target.parentNode.childNodes[1].childNodes[1].childNodes[2];
    // console.log("child", e.target.childNodes)
  }else if(e.target.classList.contains("grand-child")){
    selectedBio = e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2];
    e.target.parentNode.parentNode.classList.toggle("yellow-border");
    // getting Bio
    // selectedBio = e.target.childNodes[2];
  }else if(e.target.classList.contains("great-grand-child")){
    e.target.parentNode.parentNode.parentNode.classList.toggle("yellow-border");
    selectedBio = e.target;
  }
  userInput.focus();
}
var selectedBio;

function mirrorText(){
  // userInput.value = selectedBio.innerHTML;
  selectedBio.innerHTML = userInput.value;
  // console.log("BIO",selectedBio);

}

function removeBorder(e){
  var cardArray = document.getElementsByClassName("card");
  for(var i=0;i<cardArray.length;i++){
    console.log(cardArray[i]);
    cardArray[i].classList.remove("yellow-border");
  }
}

userInput.addEventListener("keyup", mirrorText);

document.body.addEventListener("click", addBorder);

// document.body.addEventListener("mouseenter", loopPeople);
