import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HistoricoService } from './historico.service';
import { HttpClientService } from '../../services/httpClient.service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [SharedModule],
  providers: [HistoricoService, HttpClientService],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.css',
})
export class HistoricoComponent {
  formHistorico = new FormGroup({
    grafico: new FormControl(0, Validators.required),
    ano: new FormControl(0),
  });
  imgUrl: any;

  constructor(public historicoService: HistoricoService) {}
  buscarGrafico() {
    let formulario = this.formHistorico.getRawValue();
    let grafico = formulario.grafico ?? 0;
    let ano = formulario.ano ?? null;

    this.historicoService.getHistorico(grafico, ano);
  }
}
