import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SVGBuilder } from './builder/svg-builder';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const svg = new SVGBuilder()
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
      

    this.setHtml(svg.html)
  }

  setHtml(html: string){
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
