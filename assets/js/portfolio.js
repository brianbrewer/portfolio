window.addEventListener('load', function () {
  document.querySelector('.filter').addEventListener('click', function (e) {
    if (e.target.classList.contains('filter-item')) {
      e.target.classList.toggle('toggled')
      document.querySelector('.flex-container').classList.toggle(''.concat('filter-', e.target.dataset.toggle))
    }

    // Check if any of the filters are toggled
    var isFiltering = Array.apply(null, document.querySelectorAll('.filter-item')).reduce(function (previous, current) {
      return previous || current.classList.contains('toggled')
    }, false)

    // Start hiding items if you're filtering
    if (isFiltering) {
      document.querySelector('.flex-container').classList.add('filtering')
    } else {
      document.querySelector('.flex-container').classList.remove('filtering')
    }
  })
})
