import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-home',
  imports: [CommonModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  heroSplashText = [
    "programar",
    "estudiar",
    "aprender",
    "crear",
    "hollow knight",
    "jugar",
    "dormir",
    "comer",
    "tambien prueba terraria",
    "ver anime"
  ]


  heroText: string = "programar";


  selectRandomText() {
    const randomIndex = Math.floor(Math.random() * this.heroSplashText.length);
    return this.heroSplashText[randomIndex];
  }

  shootText()
  {
    this.heroText = this.selectRandomText();
  }
}
