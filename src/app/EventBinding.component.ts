import { Component } from '@angular/core';  
//esta importando a un decorador llamado Component desde '....'

@Component({
  selector: 'EventBinding', 
  template: `
  <h1>EVENT BINDING</h1>
    <p>VIDEO - 12</p>
  <button (mouseover) = "save($event)"> Guardar </button>
  `,
  styles: [`
  h1{color:brown;} `]
})


export class EventBinding {

    save(e){
        console.log(e);

    }
}