import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfae';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  constructor(private paisService:PaisService) { }
  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];

  buscar( termino:string){
    this.hayError = false;
    // console.log(this.termino);

    this.paisService.buscarCapital(termino)
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
