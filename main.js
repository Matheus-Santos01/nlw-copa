let backgroundBody = document.querySelector('.green');
function changeBackground(type){
  let currentNameBody = backgroundBody.className
  backgroundBody.classList.replace(currentNameBody, type)
}

const changeThemeGreen = document.querySelector(
  ".navbar .navbar-menu .navbar-item:nth-child(1)")
changeThemeGreen.addEventListener("click", () => {
  changeBackground("green")
})

const changeThemeYellow = document.querySelector(
  ".navbar .navbar-menu .navbar-item:nth-child(3)")
changeThemeYellow.addEventListener("click", () => {
  changeBackground("yellow")
})

const changeThemeBlue = document.querySelector(
  ".navbar .navbar-menu .navbar-item:nth-child(2)")
changeThemeBlue.addEventListener("click", () => {
  changeBackground('blue')
})

globalThis.changeBackground = changeBackground

function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon=${player1}.svg" alt="${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon=${player2}.svg" alt="${player2}">
    </li>
  `
}

let delay = -0.5
function createCard(date, day, games) {
  delay = delay + 0.5
  return `
    <div class="cards" style="animation-delay: ${delay}s">
      <h2> ${date} <span> ${day} </span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#card").innerHTML = 
  createCard("24/11", "quinta",
    createGame('switzerland', '07:00', 'cameroon') + 
    createGame('uruguay', '10:00', 'south-korea') + 
    createGame('portugal', '13:00', 'ghana') + 
    createGame('brazil', '16:00', 'serbia') 
  ) + 
  
  createCard("28/11", "segunda", 
    createGame('cameroon', '07:00', 'serbia') + 
    createGame('south-korea', '10:00', 'ghana') + 
    createGame('brazil', '13:00', 'switzerland') + 
    createGame('portugal', '16:00', 'uruguay')
  ) + 

  createCard("02/12", "sexta",
    createGame('south-korea', '12:00', 'portugal') +
    createGame('ghana', '12:00', 'uruguay') + 
    createGame('serbia', '16:00', 'switzerland') +  
    createGame('cameroon', '16:00', 'brazil')
  )