window.addEventListener('load', function () {
  var clipboard = new Clipboard('.share-clipboard')
  clipboard.on('success', function (e) {
    e.trigger.classList.add('success')
  })
  clipboard.on('error', function (e) {
    e.trigger.classList.add('error')
  })
})
