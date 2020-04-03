import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos2',
  template: `
  <h1>Aprendiendo  a  crear componentes con ANGULAR CLI </h1>
  <p> De una manera sencilla y rapida -  VIDEO 7</p>`,
  styles: [` 
  h1{color: blue;} 
  p{color: green;},
  `]
})
export class Cursos2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
