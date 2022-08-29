import { Component,Input} from '@angular/core';
import { Country } from '../../interfaces/pais.interfae';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent{

  @Input() paises: Country[]=[];
 
}
