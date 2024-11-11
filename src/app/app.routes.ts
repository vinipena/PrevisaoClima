import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PredicaoComponent } from './components/predicao/predicao.component';
import { HistoricoComponent } from './components/historico/historico.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
