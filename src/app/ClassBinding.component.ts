import { Component } from '@angular/core';  

@Component({
  selector: 'classBinding', 
  template: `
  <h1> CLASS BIRDING </h1>
  <p>VIDEO - 10</p>
  <button [class.activo] = "isActive">  Mi Boton</button>
  `
  
  ,
  styles: [`
  .activo {
    padding: 0 16px;
    border-radius: 2px;
    background-color: #018786;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: #fff;
    transition: background-color 15ms linear,
      box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  
    height: 36px;
    line-height: 2.25rem;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  
  .activo:hover, .activo:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #159090;
  }
  
  .activo:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
    background-color: #61b4b3;
  }
  h1{color:brown;
  }
`]
})


export class ClassBinding {
    isActive=true;
  
}

 