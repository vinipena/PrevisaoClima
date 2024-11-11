import { Injectable } from '@angular/core';
import { HttpClientService } from '../../services/httpClient.service';

@Injectable({
  providedIn: 'root',
})
export class PredicaoService {
  constructor(private httpService: HttpClientService) {}

  async getPredicao(data: string) {
    let dia = data.split('-')[2];
    let mes = data.split('-')[1];
    try {
      let result = await this.httpService.getPrevisao(+dia, +mes);
      return result;
    } catch (error) {
      return error;
    }
  }

  getEventos() {
    return this.httpService.getEventos();
  }
}
