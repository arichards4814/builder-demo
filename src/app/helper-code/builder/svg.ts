import { SVGBuilder1 } from "./svg-builder1";

export class SVG1 {
    html: string;

    constructor(builder: SVGBuilder1){
        this.html = builder.html; 
    }
}