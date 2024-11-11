import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared/shared.module';
import { HistoricoComponent } from './components/historico/historico.component';
import { PredicaoComponent } from './components/predicao/predicao.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SharedModule, HistoricoComponent, PredicaoComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Predição Climática Extrema';
}
