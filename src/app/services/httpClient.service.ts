import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Predicao } from '../components/predicao/predicao';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  urlBase = 'http://localhost:8000';

  //URL Previsão
  urlPrevisao = this.urlBase + '/previsao/';

  //Url Eventos
  urlEventos = this.urlBase + '/listar-dias-eventos';

  //URL Gráficos
  //Tendencia Anual Temperatura
  urlTendenciaAnualTemperatura =
    this.urlBase + '/grafico-tendencia-temperatura/';
  //Tendencia Anual Precipitação
  urlTendenciaAnualPrecipitacao =
    this.urlBase + '/grafico-tendencia-precipitacao-anual/';
  //Tendencia precipitação geral
  urlTendenciaPrecipitacaoGeral =
    this.urlBase + '/grafico-tendencia-precipitacao-geral/';
  //Tendencia Media Temperatura
  urlTendenciaMediaTemperatura =
    this.urlBase + '/grafico-medias-temperaturas/';
  //Rosa dos Ventos
  urlRosaDosVentos = this.urlBase + '/grafico-rosa-ventos/';
  //Precipitação por mês
  urlPrecipitacaoPorMes = this.urlBase + '/grafico-precipitacao-mensal/';
  constructor(private http: HttpClient) {}

  getPrevisao(dia: number, mes: number) {
    //Exemplo http://localhost:8000/previsao/31_12
    return this.http.get<Predicao>(this.urlPrevisao + dia + '/' + mes).toPromise();
  }

  getEventos() {
    return this.http.get(this.urlEventos);
  }

  getTendenciaAnualTemperatura(ano: number) {
    //Exemplo http://localhost:8000/grafico-tendencia-temperatura/2020
    return this.http.get(this.urlTendenciaAnualTemperatura + ano, { responseType: 'blob' });
  }

  getTendenciaAnualPrecipitacao(ano: number) {
    //Exemplo http://localhost:8000/grafico-tendencia-precipitacao-anual/2020
    return this.http.get(this.urlTendenciaAnualPrecipitacao + ano, { responseType: 'blob' });
  }

  getTendenciaPrecipitacaoGeral() {
    //Exemplo http://localhost:8000/grafico-tendencia-precipitacao-geral/
    return this.http.get(this.urlTendenciaPrecipitacaoGeral, { responseType: 'blob' });
  }

  getTendenciaMediaTemperatura(ano: number) {
    //Exemplo http://localhost:8000/grafico-tendencia-medias-temperatura/
    return this.http.get(this.urlTendenciaMediaTemperatura + ano, { responseType: 'blob' });
  }

  getRosaDosVentos() {
    //Exemplo http://localhost:8000/grafico-rosa-ventos/2020
    return this.http.get(this.urlRosaDosVentos, { responseType: 'blob' });
  }

  getPrecipitacaoPorMes(ano: number) {
    //Exemplo http://localhost:8000/grafico-precipitacao-mensal/2020
    return this.http.get(this.urlPrecipitacaoPorMes + ano, { responseType: 'blob' });
  }
}
