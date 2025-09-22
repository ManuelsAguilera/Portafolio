import { Component, HostListener, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  menuOpen = false;
  isMobile = false;
  
  ngOnInit() {
    this.checkViewport();
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

 @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
  }

  checkViewport() {
    this.menuOpen=false;
    this.isMobile = window.innerWidth <= 768;

    if ( window.innerWidth <= 400)
    {
      document.getElementById("ContactButton")?.classList.add("hidden");
  
    }
    else {
      document.getElementById("ContactButton")?.classList.remove("hidden");
    }
    this.cdr.detectChanges();  // << Notifica a Angular que actualice la vista
  }

  contactar() {
    if (this.isMobile) {
      console.log("Movil");
    }
    else {
      console.log("No movil");
    }

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
