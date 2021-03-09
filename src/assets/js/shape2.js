import anime from 'animejs'

export default function (cb) {
  const score = anime.timeline({
    targets: '.shape2 .score',
    autoplay: true
  })
  const cardL = anime.timeline({
    targets: '.shape2 .card-l',
    autoplay: true
  })
  const cardR = anime.timeline({
    targets: '.shape2 .card-r',
    autoplay: true
  })
  const goals = anime.timeline({
    targets: '.shape2 .goals',
    autoplay: true
  })
  const times = anime.timeline({
    targets: '.shape2 .times',
    autoplay: false
  })

  const completeShape2 = anime(
    {
      target: '.shape2',
      duration: 500,
      opacity: 0,
      autoplay: false,
      complete: () => {
        document.querySelector('.shape2').style.visibility = 'hidden'
        document.querySelector('.logo').style.visibility = 'hidden'
        if (cb) cb()
      }
    })
  times.add(
    {
      opacity: [0, 1],
      duration: 100,
      complete: () => {
        anime({
          targets: '.times__cards .card-small',
          rotateY: 360,
          duration: 1200,
          elasticity: 800,
          loop: false,
          direction: 'normal',
          complete: () => {
            setTimeout(() => {
              completeShape2.play()
            }, 2000)
          }
        })
      }
    })

  score.add(
    {
      duration: 1000,
      easing: 'easeOutQuad',
      top: ['-200%', '162px']
    })
  cardL.add(
    {
      duration: 1000,
      easing: 'easeOutQuad',
      left: ['-200%', '55px']
    })
  cardR.add(
    {
      duration: 1000,
      easing: 'easeOutQuad',
      right: ['-200%', '55px']
    })
  goals.add(
    {
      duration: 1000,
      easing: 'easeOutQuad',
      bottom: ['-68px', '68px']
    }).add(
    {
      duration: 500,
      opacity: 0,
      complete: () => {
        times.play()
      }
    }, 4000)
}
