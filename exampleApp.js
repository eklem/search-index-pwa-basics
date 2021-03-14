const first = document.querySelector('#number1')
const second = document.querySelector('#number2')

const result = document.querySelector('.result')

if (window.Worker) {
  const queryWorker = new Worker('./dist/queryWorker.js')

  first.onchange = function () {
    queryWorker.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  }

  second.onchange = function () {
    queryWorker.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  }

  queryWorker.onmessage = function (e) {
    result.textContent = e.data
    console.log('Message received from worker')
  }
} else {
  console.log('Your browser doesn\'t support web workers.')
}
