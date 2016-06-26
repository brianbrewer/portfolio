window.addEventListener('load', function () {
  var toggleHandler = function () {
    document.querySelector('.nav-list').classList.toggle('hidden')
    document.querySelector('.nav-toggle').classList.toggle('pressed')
  }
  document.querySelector('.nav-toggle').addEventListener('click', toggleHandler)
})
