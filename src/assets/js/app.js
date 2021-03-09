import initLogo from './logo'
import shape1 from './shape1'
import shape2 from './shape2'
import shape3 from './shape3'

const initShape3 = () => {
  document.querySelector('.shape2').style.visibility = 'hidden'
  if (!document.querySelector('.shape3')) return
  document.querySelector('.shape3').style.visibility = 'visible'
  shape3()
}

const initShape2 = () => {
  document.querySelector('.shape1').style.visibility = 'hidden'
  if (!document.querySelector('.shape2')) return
  document.querySelector('.shape2').style.visibility = 'visible'
  shape2(initShape3)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.shape2').style.visibility = 'hidden'
  document.querySelector('.shape3').style.visibility = 'hidden'
  if (document.querySelector('.logo')) initLogo('.logo')
  if (document.querySelector('.shape1')) shape1(initShape2)
})
