import { SVG } from "../svg/svg-builder-demo/svg"
import { SVGBuilder1 } from "./builder/svg-builder1"

`<svg height="250" width="500">
    <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>`

const svg: SVG = new SVGBuilder1()
.height('250')
.width('500')
.color('orange')
.outlineColor('black')
.strokeWidth('4')
.addPath([
  {x: 220, y: 10 },
  {x: 300, y: 210 },
  {x: 170, y: 250 },
  {x: 123, y: 234 }
])
.addPath([
  {x: 200, y: 100 },
  {x: 290, y: 210 },
  {x: 170, y: 250 },
  {x: 100, y: 234 }
])
.build()



const limeSVG: SVG = new SVGBuilder1()
.height('250')
.width('500')
.color('lime')
.outlineColor('black')
.strokeWidth('4')
.addPath([
  {x: 220, y: 10 },
  {x: 300, y: 210 },
  {x: 170, y: 250 },
  {x: 123, y: 234 }
])
.build()