import { Component } from '@angular/core';
import { Building } from "../../components/building/building";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-contactame',
  imports: [Building, Header],
  templateUrl: './contactame.html',
  styleUrl: './contactame.css'
})
export class Contactame {

}
