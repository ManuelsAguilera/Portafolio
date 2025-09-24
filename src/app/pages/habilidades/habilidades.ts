import { Component } from '@angular/core';
import { Building } from "../../components/building/building";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-habilidades',
  imports: [Building, Header],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css'
})
export class Habilidades {

}
