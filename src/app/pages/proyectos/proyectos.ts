import { Component } from '@angular/core';
import { Building } from '../../components/building/building';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-proyectos',
  imports: [Building, Header],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

}
