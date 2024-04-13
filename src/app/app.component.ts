import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp2024-angular-apex-dagg-homeworks-no-sa2';

  constructor(public router: Router) { }
}
