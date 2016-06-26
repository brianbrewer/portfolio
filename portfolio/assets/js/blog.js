window.addEventListener('load', function () {
  Array.apply(null, document.querySelectorAll('.date span')).forEach(function (elem) {
    elem.innerHTML = moment(elem.innerHTML).format('Do MMMM YYYY')
  })
})
