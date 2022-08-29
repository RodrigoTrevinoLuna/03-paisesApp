import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import {  Subject } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  termino:string = ""

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeHolder: string = "";

  debouncer: Subject<string> = new Subject();
  
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      // console.log('debouncer: ', valor);
      this.onDebounce.emit( valor );
    })
  }

  buscar(){
    this.onEnter.emit( this.termino)
  }

  teclaPresionada ( event: any){
    const valor = event.target.value;
    
    this.debouncer.next(this.termino);
    // console.log(valor);
    // // console.log(this.termino);
  }

}
