import { Component } from '@angular/core';  
//esta importando a un decorador llamado Component desde '....'

@Component({
  selector: 'EventFiltering', 
  template: `
  <br/>
  <h1>EVENT FILTERING</h1>
    <p>VIDEO - 13</p>
    <input type = "text" (keyup.enter) = "onKeyUp()"/>
  `,
  styles: [`
  h1{
      color:brown;
  }
  input{
    border-radius: 5px;
    font-size:20px;
  }
   `]
})


export class EventFiltering {

    onKeyUp(){
          console.log("Enter fue Presionado");
     }
}