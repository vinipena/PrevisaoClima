export interface Predicao {
  data: string;
  probabilidadeEventoAtipico: number;
  isTemperaturaAbaixoMedia: boolean;
  temperaturaAbaixoMediaObtida: number | null;
  temperaturaMinimaMedia: number;
  isTemperaturaAcimaMedia: boolean;
  temperaturaAcimaMediaObtida: number | null;
  temperaturaMaximaMedia: number;
  isPrecipitacaoAcimaMedia: boolean;
  precipitacaoAcimaMediaObtida: number | null;
  precipitacaoMedia: number;
  isVentoAcimaMedia: boolean;
  ventoAcimaMediaObtido: number | null;
  ventoMedia: number;
  mediaUtilizada: string[];
}

export function convertePrevisaoBD(previsao: any): any {
  return {
    data: previsao.data,
    probabilidadeEventoAtipico: previsao.probabilidade_evento_atipico,
    isTemperaturaAbaixoMedia: previsao.is_temperatura_abaixo_media,
    temperaturaAbaixoMediaObtida: previsao.temperatura_abaixo_media_obtida,
    temperaturaMinimaMedia: previsao.temperatura_minima_media,
    isTemperaturaAcimaMedia: previsao.is_temperatura_acima_media,
    temperaturaAcimaMediaObtida: previsao.temperatura_acima_media_obtida,
    temperaturaMaximaMedia: previsao.temperatura_maxima_media,
    isPrecipitacaoAcimaMedia: previsao.is_precipitacao_acima_media,
    precipitacaoAcimaMediaObtida: previsao.precipitacao_acima_media_obtida,
    precipitacaoMedia: previsao.precipitacao_media,
    isVentoAcimaMedia: previsao.is_vento_acima_media,
    ventoAcimaMediaObtido: previsao.vento_acima_media_obtido,
    ventoMedia: previsao.vento_media,
    mediaUtilizada: previsao.media_utilizada,
  };
}
