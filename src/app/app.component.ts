import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AComponent} from './a/a.component';

@Component({
  selector: 'root-directive',
  standalone: true,
  imports: [RouterOutlet, AComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string = 'my-first-app';
  name:string = "Martin";
  age:number = 10001;

}
