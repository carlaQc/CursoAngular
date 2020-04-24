import { Component } from '@angular/core';  
//esta importando a un decorador llamado Component desde '....'

@Component({
  selector: 'TemplateVariable', 
  template: `
  <br/>
  <h1>TEMPLATE VARIABLE</h1>
    <p>VIDEO - 14</p>
    <input type = "text" (keyup.enter) = "onKeyUp(nombre.value)" #nombre/>
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


export class TemplateVariable {

    onKeyUp(usuario){
          console.log(usuario);
     }
}