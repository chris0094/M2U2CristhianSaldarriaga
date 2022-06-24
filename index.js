const numbersForm = document.querySelector('#numbersForm')
const alertMessage = document.querySelector('#alert')
const resultMessage = document.querySelector('#result')
let numbers, uniques;

numbersForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const numberA = +document.querySelector('#numberA').value
  const numberB = +document.querySelector('#numberB').value
  const numberC = +document.querySelector('#numberC').value
  const numberD = +document.querySelector('#numberD').value
  numbers = [numberA, numberB, numberC, numberD]
  uniques = [...new Set(numbers)]
  if (numbers.length !== uniques.length) {
    printResult(false)
  } else {
    uniques.sort((a, b) => a - b)
    printResult(true)
  }
})

numbersForm.addEventListener('reset', (e) => {
  alertMessage.style.display = 'none'
  resultMessage.style.display = 'none'
  numbers = null
  uniques = null
})

const printResult = (show) => {
  alertMessage.style.display = !show ? 'flex' : 'none'
  resultMessage.style.display = show ? 'flex' : 'none'
  resultMessage.innerHTML = show ? `El número mayor es ${uniques[uniques.length - 1]} y el número menor es ${uniques[0]}` : ''
}