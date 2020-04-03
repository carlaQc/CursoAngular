import { Component } from '@angular/core';

@Component({
    selector: 'video9',
    template: `
    <h1> IMAGEN CON INTERPOLACION</h1>
    <img src = "{{ imagenURL}}"/>

    <h1>IMAGEN UTILIZANDO PROPERTY BINDING </h1>
    <p> VIDEO - 9</p>
    <img [src] = "imagenURL" /><br/>
    <button [disabled] = "botonStatus">MI BOTON</button>
       
    `,
    styles: [`
    button {
        padding: .6rem 1rem;
        border: 1px solid #995309;
        border-radius: 4px;
        background-color: #d9750b;
        color: #fff;
        font-size: 1.5rem;
        text-shadow: 0 -1px 0 rgba(0,0,0,.5);
        box-shadow: 0 1px 0 rgba(255,255,255,.5) inset,
          0 1px 3px rgba(0,0,0,.2);
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#f90),to(#e76a00));
        background-image: linear-gradient(#f90 10%,#e76a00 100%);
      }
      
      button:hover, .btn-3d:focus {
        background-color: #e0811b;
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#f0a100),to(#f70));
        background-image: linear-gradient(#f0a100 10%,#f70 100%);
      }
      
      button:active {
        background-color: #cf6a00;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.2) inset;
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#f0a100),to(#f70));
        background-image: linear-gradient(#f0a100 10%,#f70 100%);
      }
    h1{ 
        color:brown;
    }
`]

})


export class PropertyBinding{
imagenURL = "https://placekitten.com/640/360";
botonStatus = false;
}