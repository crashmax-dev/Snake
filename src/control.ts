import { Segment } from './snake'

interface ControlProps {
  segments: Segment[]
  size: number
  wasd: boolean
}

class Сontrol {
  private segments: Segment[]
  private length: number
  private head: Segment
  private wasd: boolean
  private size: number
  private key: string

  public sleep: boolean

  constructor(options: ControlProps) {
    this.segments = options.segments
    this.length = this.segments.length - 1
    this.head = options.segments[0]
    this.wasd = options.wasd
    this.size = options.size
    this.sleep = true

    document.addEventListener('keydown', e => {
      console.log(e.code)

      if (
        e.code === 'KeyW' ||
        e.code === 'KeyS' ||
        e.code === 'KeyA' ||
        e.code === 'KeyD'
      ) {
        this.key = e.code
        this.sleep = false
      }

      if (e.code === 'Space') {
        this.sleep = true
      }
    })
  }

  move() {
    if (this.sleep) return

    for (let i = this.length; i > 0; i--) {
      this.segments[i].x = this.segments[i - 1].x
      this.segments[i].y = this.segments[i - 1].y
    }

    switch (this.key) {
      case 'KeyW':
        this.head.y -= 1
        break
      case 'KeyS':
        this.head.y += 1
        break
      case 'KeyA':
        this.head.x -= 1
        break
      case 'KeyD':
        this.head.x += 1
        break
    }
  }

  teleport() {
    if (this.head.x < 0) {
      this.head.x = this.size - 1
    }

    if (this.head.x > this.size - 1) {
      this.head.x = 0
    }

    if (this.head.y < 0) {
      this.head.y = this.size - 1
    }

    if (this.head.y > this.size - 1) {
      this.head.y = 0
    }
  }
}

export { Сontrol }