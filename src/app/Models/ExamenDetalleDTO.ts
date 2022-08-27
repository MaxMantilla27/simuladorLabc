export interface RegistroLabcExamenDetalleDTO{
  id:number,
  idSimuladorLabcExamen:number,
  idSimuladorLabcDominio:number,
  idSimuladorLabcTarea?:number,
  idSimuladorLabcPregunta:number,
  ejecutado:boolean,
  idSimuladorLabcPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
