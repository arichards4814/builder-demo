import { SVG } from "./svg";

export class SVGBuilder {
    _height: string; 
    _width: string; 
    _color: string;
    _outlineColor: string;
    _strokeWidth: string;
    _paths: Array<Array<{ x: number, y: number }>> = [];

    html: string;


    height(height: string) {
        this._height = height;
        return this;
    }

    width(width: string) {
        this._width = width;
        return this;
    }

    color(color: string) {
        this._color = color;
        return this;
    }

    outlineColor(outlineColor: string) {
        this._outlineColor = outlineColor;
        return this;
    }

    strokeWidth(strokeWidth: string) {
        this._strokeWidth = strokeWidth;
        return this;
    }

    addPath(pathParts: Array<{x: number, y: number }>) {
        this._paths.push(pathParts);
        return this;
    }


    build(){
        let svgParts: Array<string> = []
        svgParts.push(`<svg height= "${this._height}" width="${this._width}">`);

        for(let path of this._paths){
            let points = this.getPoints(path);
            svgParts.push(`<polygon points="${points}" style="fill:${this._color};stroke:${this._outlineColor}; stroke-width:${this._strokeWidth}"/>`);
        }
       
        svgParts.push(`</svg>`);

        this.html = svgParts.join('');

        return new SVG(this);
    }

    getPoints(path: Array<{x: number, y: number}>){
        let pathString = ''
        path.forEach(path => {
            pathString = `${pathString} ${path.x.toString()},${path.y.toString()}`
        })
        return pathString;
    }

}