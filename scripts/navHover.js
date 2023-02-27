;(function () {
  window.onload = init

  function init() {
    about = document.getElementById('about')
    aboutBg = document.getElementById('aboutBg')
    aboutSubmenu = document.getElementById('aboutSubmenu')
    about.addEventListener(
      'mouseenter',
      (event) => {
        aboutSubmenu.style.display = 'block'

        aboutBg.style.height = about.clientHeight - 30 + aboutSubmenu.clientHeight + 'px'
        console.log(about.clientHeight)
        console.log(aboutSubmenu.clientHeight)
        console.log(aboutBg.clientHeight)
        aboutBg.style.background =
          'linear-gradient(180deg, rgba(13, 17, 29,0.7) 0%, rgba(13, 17, 29, 0) 100%)'
      },
      false
    )
    about.addEventListener(
      'mouseleave',
      (event) => {
        aboutBg.style.background = 'transparent'
        aboutSubmenu.style.display = 'none'
      },
      false
    )
  }
})()
