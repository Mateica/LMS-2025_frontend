import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router){}

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }
}
