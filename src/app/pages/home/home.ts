import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { TargetHero } from '../../components/target-hero/target-hero';
import { Building } from "../../components/building/building";


@Component({
  selector: 'app-home',
  imports: [CommonModule, Header, TargetHero, Building],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {

  heroSplashText = [
    "programar",
    "estudiar",
    "aprender",
    "crear",
    "hollow knight",
    "jugar",
    "dormir",
    "comer",
    "wizarding",
    "ver anime"
  ]


  heroTextActive:boolean=false;
  heroText:string = "programar";
  heroTextElement:HTMLElement | null = null;


  ngAfterViewInit() {
    this.heroTextElement = document.getElementById('hero-text');
  }

  selectRandomText() {
    const randomIndex = Math.floor(Math.random() * this.heroSplashText.length);
    return this.heroSplashText[randomIndex];
  }

  shootText()
  {
    if(this.heroTextElement && !this.heroTextActive) 
    {
      this.heroTextActive = true; 
      this.heroText = this.selectRandomText();
      this.heroTextElement.classList.add('animate-hero-text');

      setTimeout(() => {
        this.heroTextActive = false;
        if (this.heroTextElement) {
          this.heroTextElement?.classList.remove('animate-hero-text');
          
        }
    },300)
    }
      
    
  }
}
