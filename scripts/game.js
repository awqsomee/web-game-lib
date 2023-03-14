let slides = []
let dots = []
let viewportWidth = window.innerWidth
let slideIndex = 0
let videoIsPlaying = 1

;(function () {
  window.onload = () => {
    navbarAboutHover()
    slider()
  }
})()

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

const slider = () => {
  slides = document.getElementsByClassName('item')

  slides[0].style.transform = `translateX(0px)`
  if (slides.length <= 1) {
    return
  }
  document.querySelectorAll('arrow').forEach((arrow) => (arrow.style.opacity = '1'))
  let dotSpace = document.querySelector('dots')
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('div')
    dot.className = 'dot'
    dot.setAttribute('onclick', `toSlide(${i})`)
    dotSpace.appendChild(dot)
  }
  dots = document.getElementsByClassName('dot')
  dots[0].classList.add('active')
  dotSpace.style.opacity = '1'
}

const nextSlide = () => {
  if (slideIndex >= slides.length - 1) {
    slides[slideIndex].animate(
      [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-30px)' },
        { transform: 'translateX(0px)' },
      ],
      {
        duration: 400,
        iterations: 1,
        easing: 'ease',
      }
    )
    return
  }
  slides[slideIndex].style.transform = `translateX(-${viewportWidth}px)`
  dots[slideIndex].classList.remove('active')
  slideIndex++
  slides[slideIndex].style.transform = `translateX(0px)`
  dots[slideIndex].classList.add('active')
}

const previousSlide = () => {
  if (slideIndex <= 0) {
    slides[slideIndex].animate(
      [
        { transform: 'translateX(0px)' },
        { transform: 'translateX(30px)' },
        { transform: 'translateX(0px)' },
      ],
      {
        duration: 400,
        iterations: 1,
        easing: 'ease',
      }
    )
    return
  }
  slides[slideIndex].style.transform = `translateX(${viewportWidth}px)`
  dots[slideIndex].classList.remove('active')
  slideIndex--
  slides[slideIndex].style.transform = `translateX(0px)`
  dots[slideIndex].classList.add('active')
}

const toSlide = (slideNum) => {
  dots[slideIndex].classList.remove('active')
  if (slideIndex < slideNum)
    for (let i = 0; i < slideNum; i++) slides[i].style.transform = `translateX(-${viewportWidth}px)`
  slides[slideNum].style.transform = `translateX(0px)`

  if (slideIndex > slideNum) {
    for (let i = slides.length - 1; i > slideNum; i--)
      slides[i].style.transform = `translateX(${viewportWidth}px)`
    slides[slideNum].style.transform = `translateX(0px)`
  }
  slideIndex = slideNum
  dots[slideIndex].classList.add('active')
}

const videoControl = () => {
  const iframe = document.querySelector('iframe')
  if (videoIsPlaying)
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
      '*'
    )
  else
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + 'playVideo' + '","args":""}',
      '*'
    )
  videoIsPlaying = !videoIsPlaying
}
