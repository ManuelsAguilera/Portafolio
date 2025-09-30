import { Component } from '@angular/core';

class TargetPoint {


  public element?: HTMLElement;



  constructor(
    public x:number,
    public y:number,
    public timestamp:number = Date.now()
  ) {}


getTargetHTML(): HTMLElement {
    const div = document.createElement('div');
    
    // Usar Tailwind classes
    div.className = 'absolute w-1 h-1  bg-fern-500 rounded-full'
                + ' pointer-events-none z-50 animate-bullet';

    

    //Sumar el scroll
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    this.x += scrollX;
    this.y += scrollY;


    // Posición
    div.style.left = `${this.x}px` ;
    div.style.top = `${this.y}px`;
    
    this.element = div;
    return div;
  }
  getTimeDiff():number {
    return Date.now() - this.timestamp;
  }

}


@Component({
  selector: 'app-target-hero',
  imports: [],
  templateUrl: './target-hero.html',
  styleUrl: './target-hero.css'
})
export class TargetHero {

  private targetPoints:TargetPoint[] = [];

removeTargetPoint() {
    if (this.targetPoints.length > 0) {
      const removedPoint = this.targetPoints.shift();
      if (removedPoint?.element) {
        document.body.removeChild(removedPoint.element);
      }
    }
  }

  drawLastTargetPoint() {
    const lastPoint = this.targetPoints[this.targetPoints.length - 1];
    if (lastPoint) {
      const targetHTML = lastPoint.getTargetHTML();
      document.body.appendChild(targetHTML);
      
      setTimeout(() => {
        this.removeTargetPoint();
      }, 3000);
    }
  }

  addTargetPoint(x: number, y: number) {
    this.targetPoints.push(new TargetPoint(x, y));
    if (this.targetPoints.length > 5) {
      const removedPoint = this.targetPoints.shift();
      if (removedPoint?.element) {
        document.body.removeChild(removedPoint.element);
      }
    }
  }

  onComponentClick(event: MouseEvent) {
    console.log('Click at:', event.clientX, event.clientY);
    this.addTargetPoint(event.clientX, event.clientY);
    this.drawLastTargetPoint();
  }


}
