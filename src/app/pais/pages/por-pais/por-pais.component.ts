import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfae';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  constructor(private paisService:PaisService) { }
  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];

  buscar( termino:string){
    this.hayError = false;
    // console.log(this.termino);

    this.paisService.buscarPais(termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      
      },(err) => {
        this.hayError = true;
        this.paises = [];
      }
      );
  }

  sugerencias( termino: string){
    this.hayError = false;
    //TODO: crear suferencias

}
}