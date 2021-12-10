import { SVGBuilder1 } from "./svg-builder1";

// class CircleBuilder1 extends SVGBuilder1 {

//     constructor(circle = new Circle()){
//         super();
//         this.circleSVG = circle;
//     }

//     hasPosition(x, y){
//         this.circleSVG.circlePosition = {x, y};
//         return this;
//     }

//     hasRadius(radius: string){
//         this.circleSVG.circleRadius = radius;
//         return this;
//     }

//     hasColor(color: string){
//         this.circleSVG.circleColor = color;
//         return this;
//     }
// }

// class Circle {
//     circlePosition: {x: string, y: string};
//     circleColor: string;
//     circleRadius: string;

//     get html(){
//         return `<circle cx="${this.circlePosition.x}" cy="${this.circlePosition.y}" r="${this.circleRadius}" stroke="black" stroke-width="3" fill="${this.circleColor}" />`
//     }
// }