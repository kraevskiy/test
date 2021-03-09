import anime from 'animejs'

const shirt = anime.timeline({
  targets: '.shape1 .card-shirt',
  autoplay: false
})

shirt.add({
  translateX: ['-900px', 0],
  duration: 600,
  easing: 'easeOutQuad',
  delay: 200
}).add(
  {
    translateX: [0, '-900px'],
    duration: 800,
    easing: 'easeOutQuad',
    delay: 2000
  })

const info = anime.timeline({
  targets: '.shape1 .card-info',
  autoplay: false
})

info.add({
  translateX: ['1200px', 0],
  duration: 600,
  easing: 'easeOutQuad',
  delay: 200
}).add(
  {
    translateX: [0, '1200px'],
    duration: 750,
    easing: 'easeOutQuad',
    delay: 2000
  })

export default function (cb) {
  const step1Animation = anime.timeline({
    targets: '.shape1 .title',
    autoplay: true
  })

  step1Animation.add(
    {
      scale: 0,
      left: '50%',
      top: '50%',
      translateY: [0, 0],
      translateX: [0, 0],
      duration: 0,
      delay: 200
    }).add(
    {
      scale: [0, 1],
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      duration: 500,
      easing: 'easeOutQuad',
      delay: 200
    }).add(
    {
      scale: 1.12,
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      duration: 800,
      easing: 'easeOutQuad'
    }).add(
    {
      scale: 1,
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      duration: 800,
      easing: 'easeOutQuad'
    }).add(
    {
      scale: 1.12,
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      duration: 800,
      easing: 'easeOutQuad'
    }).add(
    {
      scale: 1,
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      duration: 800,
      easing: 'easeOutQuad',
      complete: () => {
        shirt.play()
        info.play()
      }
    }).add(
    {
      scale: 0.43,
      top: '10.5%',
      duration: 800,
      easing: 'easeOutQuad'
    }).add(
    {
      top: '-30%',
      delay: 2000,
      complete: () => {
        if (cb) cb()
      }
    })
}
