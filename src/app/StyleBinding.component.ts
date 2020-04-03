import { Component } from '@angular/core';

@Component({
    selector: 'StyleBinding',
    template: 
    `
    <h1>STYLE BINDING</h1>
    <p>VIDEO - 11</p>
    <button [style.borderColor] ="isActive ? 'green': 'white' "> MI BOTON</button>
    `,
    styles: [' h1{color:brown;}']

})
export class StyleBinding{

    isActive =true;

}