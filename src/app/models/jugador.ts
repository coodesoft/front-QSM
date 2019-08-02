export class Jugador {

  public NombreApellido:string = '';
  public Compania:string       = '';
  public Puesto:string         = '';
  public Mail:string           = '';


  private errors:string = '';
  public getErrors() { return this.errors; }

  isValid(){
    if (this.NombreApellido == ''){ this.errors = 'Es necesario ingresar el Nombre y Apellido'; return false; }
    if (this.Compania == '')      { this.errors = 'Es necesario ingresar la Compañia'; return false; }
    if (this.Puesto == '')        { this.errors = 'Es necesario ingresar el Puesto'; return false; }
    if (this.Mail == '')          { this.errors = 'Es necesario ingresar el Email'; return false; }

    return true;
  }
}
