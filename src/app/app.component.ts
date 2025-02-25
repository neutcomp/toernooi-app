import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeelnemersComponent } from "./deelnemers/deelnemers.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeelnemersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toernooi-app';
}
