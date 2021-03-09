import anime from 'animejs'

export default function (selector) {
  anime(
    {
      delay: 200,
      targets: selector,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeInQuad'
    })
}
