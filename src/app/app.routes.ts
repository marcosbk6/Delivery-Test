import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importe o componente
import { MenuComponent } from './menu/menu.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Rota inicial
  { path: 'menu', component: MenuComponent }
  // Outras rotas podem ser adicionadas aqui
];
