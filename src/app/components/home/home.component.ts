import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { MatDatepicker } from '@angular/material/datepicker';
import { PredicaoComponent } from '../predicao/predicao.component';
import { HistoricoComponent } from '../historico/historico.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, PredicaoComponent, HistoricoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
