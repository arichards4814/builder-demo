import { SVGBuilder } from "./svg-builder";

export class SVG {
    html: string;

    constructor(builder: SVGBuilder){
        this.html = builder.html; 
    }
}