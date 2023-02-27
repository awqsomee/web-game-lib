;(function () {
  window.onload = () => {
    dynamicNavbarWidth()
    navbarAboutHover()
  }
})()

const dynamicNavbarWidth = () => {
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
}

const navbarAboutHover = () => {
  about = document.getElementById('about')
  aboutBg = document.getElementById('aboutBg')
  aboutSubmenu = document.getElementById('aboutSubmenu')
  about.addEventListener(
    'mouseenter',
    () => {
      aboutSubmenu.style.display = 'block'

      aboutBg.style.height = about.clientHeight - 30 + aboutSubmenu.clientHeight + 'px'
      aboutBg.style.background =
        'linear-gradient(180deg, rgba(13, 17, 29,0.7) 0%, rgba(13, 17, 29, 0) 100%)'
    },
    false
  )
  about.addEventListener(
    'mouseleave',
    () => {
      aboutBg.style.background = 'transparent'
      aboutSubmenu.style.display = 'none'
    },
    false
  )
}
