import { Component } from '@angular/core';

@Component({
    selector: 'video9',
    template: `
    <img src = "{{ imagenURL}}"/>

    <h2>usando Property Binding </h2>
    <img [src] = "imagenURL" /><br/>
    <button [disabled] = "botonStatus"> Mi boton</button>
       
    `,
    styles: ['']

})


export class PropertyBinding{
imagenURL = "https://placekitten.com/640/360";
botonStatus = false;
}