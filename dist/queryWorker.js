// queryWorke.js
// Proxy for all things search-index query side. Read part of CRUD
// This is done as a web worker since indexing is using a service worker

onmessage = function (e) {
  console.log('Worker: Message received from main script')
  const result = e.data[0] * e.data[1]
  if (isNaN(result)) {
    postMessage('Please write two numbers')
  } else {
    const workerResult = 'Result: ' + result
    console.log('Worker: Posting message back to main script')
    postMessage(workerResult)
  }
}
