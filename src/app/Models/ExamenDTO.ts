import { RegistroLabcExamenDetalleDTO } from "./ExamenDetalleDTO";

export interface RegistroLabcExamenDTO{
  id:number,
  idSimuladorLabcModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  idSimuladorLabcTarea?:number,
  idSimuladorLabcDominio:number
}
export interface RegistroLabcExamenRespuestaDTO{
  id:number,
  idSimuladorLabcModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  respuestaDetalle: Array<RegistroLabcExamenDetalleDTO>,
  idSimuladorTipoRespuesta:number
}
export interface ExamenIntentoDTO{
  Intento1:number;
  Intento2:number;
  Intento3:number;
  Intento4:number;
  Intento5:number;
  Intento6:number;
  Intento7:number;
  Intento8:number;
  Intento9:number;
  Intento10:number;
}
