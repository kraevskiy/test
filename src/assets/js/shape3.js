import anime from 'animejs'

export default function () {
  const container = document.querySelector('.shape3')
  const hexContainer = document.querySelector('#hexContainer')
  const hexagon = hexContainer.querySelector('.hexagon')

  const containerHeight = container.offsetHeight

  const hexContainerWidth = hexContainer.offsetWidth
  const hexContainerHeight = hexContainer.offsetHeight

  const hexagonWidth = hexagon.offsetWidth

  const hexagonCount = Math.ceil(hexContainerWidth / hexagonWidth) - 2
  const hexContainersCount = Math.ceil(
    containerHeight / (hexContainerHeight / 2) - 2
  )

  for (let i = 0; i < hexagonCount; i++) {
    const clone = hexagon.cloneNode(true)
    hexContainer.appendChild(clone)
  }

  for (let i = 0; i < hexContainersCount; i++) {
    const clone = hexContainer.cloneNode(true)
    container.appendChild(clone)
  }

  let animationTimeline = anime.timeline({
    easing: 'linear',
    duration: (hexContainersCount / 2) * 50,
    autoplay: true
  })

  let index = 1
  for (let i = 0; i < hexagonCount * 2; i++) {
    const even = i % 2 === 0

    const hexagonSelector = document.querySelectorAll(
      `.hex-container:nth-of-type(${
        even ? 'even' : 'odd'
      }) > .hexagon:nth-child(${index})`
    )

    index = even ? index : index + 1

    animationTimeline = animationTimeline.add(
      {
        targets: hexagonSelector,
        delay: anime.stagger(20, { from: 'center' }),
        scale: [0, 1.1]
      },
      `-=${hexContainersCount * 25}`
    )
    if (i + 1 === hexagonCount * 2) setEndAnim(animationTimeline, hexagonCount, hexContainersCount)
  }
  animationTimeline.play()
}

const setEndAnim = (animation, hexagonCount, hexContainersCount) => {
  let index = 1
  for (let i = 0; i < hexagonCount * 2; i++) {
    const even = i % 2 === 0

    const hexagonSelector = document.querySelectorAll(
      `.hex-container:nth-of-type(${
        even ? 'even' : 'odd'
      }) > .hexagon:nth-child(${index})`
    )

    index = even ? index : index + 1

    animation = animation.add(
      {
        targets: hexagonSelector,
        delay: anime.stagger(20, { from: 'center' }),
        scale: [1.1, 0],
        opacity: [0]
      },
      `-=${hexContainersCount * 25}`
    )
  }

  animation.play()
}
