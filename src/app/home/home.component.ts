import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Lógica do componente
  constructor(private router: Router) {}  // Injete o Router

  onEnterClick() {
    console.log('Botão Entrar clicado')
    this.router.navigate(['/menu']);  // Navegue para a rota do menu
  }
}
