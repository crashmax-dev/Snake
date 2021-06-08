import { Snake } from '../src/snake'

const target = document.querySelector('.main')

const snake = new Snake({
  target,
  size: 20,
  scale: 25,
  color: '#FF6347',
  wasd: false
})

console.log(snake)