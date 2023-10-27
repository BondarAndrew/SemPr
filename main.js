var splide = new Splide("#main-slider", {
  width: 600,
  height: 300,
  pagination: false,
  cover: true,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
// let serchButton = document.querySelector('.serchButton')
let subt = document.querySelector('.subtitle')
// let playerNumber = document.querySelector('.searchInput')
// const compNumber = Math.floor(Math.random() * 10) + 1;

// let trys = 0;


//  const game = function(inputNumber) {
//       const number = parseInt(inputNumber);
//   if (isNaN(number) || number < 1 || number > 10) {
//    return
//   }


//   if (number < compNumber || number > compNumber) {
//   subt.innerHTML = 'Ви не вгадали'
//   subt.style.color = 'red';
//   } else {
//     alert(`Вітаю! Ви вгадали число ${compNumber} за ${trys} спроб.`);
//   }
//   }
// serchButton.addEventListener('click', game(playerNumber.value));

const searchForm = document.querySelector(".search-form");
const searchValue = document.querySelector(".search-value");






searchForm.addEventListener('submit', (e) =>{
  e.preventDefault()
   const randomNum = Math.floor(Math.random() * 10); 

  let playerNum = e.target.playerNumber.value;
  // if (isNaN(playerNum) || playerNum > 10 || 1 < playerNum) {
  //   searchValue.innerHTML = 'Виберіть число від 1 до 10'
  // }

 

  if (playerNum > randomNum || randomNum > playerNum) {
    subt.innerHTML = `Ви програли`
    subt.style.color = 'red'
  } else {
    subt.innerHTML = `Ви вгалали число ${playerNum}`;
    subt.style.color = 'green'
  }
console.log(randomNum);
})
let textt = document.querySelector('.youWin')
let compWin = 0
let youWin = 0
const pickOne = document.querySelectorAll('.pick-one')
let computer = document.querySelector('.computer')
let you = document.querySelector('.you ')
const options = [stone, scissors, paper]

pickOne.forEach((e) =>{
  e.addEventListener('click', () => {
    let computerChouse = Math.floor(Math.random() * 3);
console.log(e.id);
console.log(options[computerChouse].id);

if (e.id === 'stone' && options[computerChouse].id === 'scissors' || e.id === 'stone' && options[computerChouse].id === 'paper' || e.id === 'scissors' && options[computerChouse] === 'paper') {
youWin++ 
you.innerHTML = youWin
textt.style.color = 'green'
textt.innerHTML = 'Ви виграли раунд!'
}

else {
  compWin++
  computer.innerHTML = compWin
  textt.style.color='red'
  textt.innerHTML='Ви програли'
}
  })
})






