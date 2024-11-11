import { Injectable } from '@angular/core';
import { HttpClientService } from '../../services/httpClient.service';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private httpService: HttpClientService) {}

  getHistorico(grafico: number, ano: number | null = null) {
    if (grafico == 1) {
      if (ano != null)
        this.httpService.getTendenciaAnualTemperatura(ano).subscribe((data) => {
          this.createImageFromBlob(data);
        });
    } else if (grafico == 2) {
      if (ano != null)
        this.httpService
          .getTendenciaAnualPrecipitacao(ano)
          .subscribe((data) => {
            console.log(data);

            this.createImageFromBlob(data);
          });
    } else if (grafico == 3) {
      this.httpService.getTendenciaPrecipitacaoGeral().subscribe((data) => {
        this.createImageFromBlob(data);
      });
    } else if (grafico == 4) {
      if (ano != null)
        this.httpService.getTendenciaMediaTemperatura(ano).subscribe((data) => {
          this.createImageFromBlob(data);
        });
    } else if (grafico == 5) {
      if (ano != null)
        this.httpService.getPrecipitacaoPorMes(ano).subscribe((data) => {
          this.createImageFromBlob(data);
        });
    } else if (grafico == 6) {
      this.httpService.getRosaDosVentos().subscribe((data) => {
        this.createImageFromBlob(data);
      });
    }
  }

  private createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageUrl = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
