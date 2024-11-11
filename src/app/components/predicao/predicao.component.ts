import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { convertePrevisaoBD, Predicao } from './predicao';
import { PredicaoService } from './predicao.service';
import { HttpClientService } from '../../services/httpClient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-predicao',
  standalone: true,
  imports: [SharedModule],
  providers: [PredicaoService, HttpClientService],
  templateUrl: './predicao.component.html',
  styleUrl: './predicao.component.css',
})
export class PredicaoComponent {
  private snackbar = inject(MatSnackBar);
  formPrevisao = new FormGroup({
    data: new FormControl(''),
  });

  predicao?: Predicao;

  constructor(private predicaoService: PredicaoService) {}

  async gerarPredicao() {
    let data = this.formPrevisao?.value.data;
    this.predicaoService.getPredicao(data as string).then((predicao) => {
      if (predicao instanceof HttpErrorResponse) {
        this.snackbar.open(predicao.error.detail, 'Fechar', {
          duration: 2000,
          panelClass: ['erro'],
        });
        return;
      }
      let predicaoConvertida = convertePrevisaoBD(predicao);
      predicaoConvertida.mediaUtilizada = this.formataMedia(
        predicaoConvertida.mediaUtilizada as string
      );
      this.predicao = predicaoConvertida;
      console.log(this.predicao);

    });
  }
  formataMedia(mediaUtilizada: string): string[] {
    return mediaUtilizada.split(',').map((item) => item.trim());
  }

  gerarListaDiasComEventos() {
    this.predicaoService.getEventos().subscribe((eventos) => {
      console.log(eventos);
    });
  }
}
