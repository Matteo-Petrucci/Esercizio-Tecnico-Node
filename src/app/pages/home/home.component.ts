import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Esercizio-Tecnico-Node';

  constructor(private router: Router) {}

  goToCreaArticolo() {
    this.router.navigateByUrl('/crea-articolo');
  }

  ngOnInit(): void {
  }

}