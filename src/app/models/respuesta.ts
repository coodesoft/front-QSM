export class Respuesta {
  public acertada:boolean   = true;
  public tipo:number        = -1;
  public explicacion:string = '';
  public l:string           = '';

  constructor(e:any = ''){
    if (e!='') {
      this.tipo        = e.t;
      this.explicacion = e.explicacion;
      this.l           = e.l;
    }
  }
}
