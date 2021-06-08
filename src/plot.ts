import { SnakeOptions } from './snake'

class Plot {
  protected target: HTMLElement | Element
  protected size: number
  protected scale: number
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  constructor(options: SnakeOptions) {
    const { target, size, scale } = options

    this.target = target
    this.size = size
    this.scale = scale

    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.target.appendChild(this.canvas)

    this.canvas.width = this.size * this.scale
    this.canvas.height = this.size * this.scale
  }

  plot() {
    this.ctx.fillStyle = '#343434'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.width)
  }

  drawText(text: string) {
    const width = this.canvas.width / 2
    const height = this.canvas.height / 2

    this.ctx.font = '54px "Courier New", Courier, monospace'
    this.ctx.textAlign = 'center'
    this.ctx.strokeStyle = '#343434'
    this.ctx.strokeText(text, width, height)
    this.ctx.fillStyle = '#FF6347'
    this.ctx.fillText(text, width, height)
  }
}

export { Plot }