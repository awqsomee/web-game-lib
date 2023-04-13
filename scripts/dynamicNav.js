var shop = document.getElementById('subtitle')
var nav = document.getElementById('nav')
nav.classList.remove('short')

var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
      return
    }

    if (entry.isIntersecting) {
      nav.classList.add('short')
      return
    }

    nav.classList.remove('short')
  })
})

observer.observe(shop)
