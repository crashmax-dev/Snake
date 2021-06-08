import { Plot } from './plot'
import { Сontrol } from './control'

interface SnakeOptions {
  target: HTMLElement | Element
  size: number
  scale: number
  color: string
  wasd: boolean
  speed?: number
}

interface Segment {
  x: number
  y: number
  z: number
}

class Snake extends Plot {
  private color: string
  private segments: Segment[]
  private control: Сontrol

  constructor(options: SnakeOptions) {
    super(options)

    this.color = options.color
    this.segments = []

    for (let i = 0; i < 3; i++) {
      this.segments.push({
        x: 0 + i,
        y: 0,
        z: i
      })
    }

    this.control = new Сontrol({
      segments: this.segments,
      wasd: options.wasd,
      size: this.size
    })

    if (this.control.sleep) {
      this.plot()
      this.drawText('Press Space')
    }

    setInterval(this.render.bind(this), options.speed || 100)
  }

  private render() {
    if (this.control.sleep) return

    this.plot()
    this.draw()
    this.control.move()
    this.control.teleport()
  }

  private draw() {
    const size = this.scale
    this.ctx.fillStyle = this.color

    for (let seg of this.segments) {
      this.ctx.fillRect(seg.x * size, seg.y * size, size, size)
    }
  }
}

export { Snake, SnakeOptions, Segment }