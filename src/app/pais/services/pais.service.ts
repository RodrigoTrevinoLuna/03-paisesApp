import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfae';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // https://restcountries.com/v2/name/mexico
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url )
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url )
  }
}
