//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
btnReset.addEventListener('keydown', handleEnter)

//funções
function handleTryClick(event) {
  event.preventDefault() //prevenir a resposta padrão, não enviar o formulário

  const inputNumber = document.querySelector("#inputNumber")
 
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || !Number(inputNumber.value) && Number(inputNumber.value) != 0) {
    alert("Número inválido")
  }

  if(inputNumber.value == "") {
    alert("Nenhum número inserido")
    return
  }

  inputNumber.value = ""
  xAttempts++
} 

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}

function handleEnter (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}