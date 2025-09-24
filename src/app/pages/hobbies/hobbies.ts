import { Component } from '@angular/core';
import { Building } from "../../components/building/building";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-hobbies',
  imports: [Building, Header],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {

}
