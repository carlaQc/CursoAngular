import { Component } from '@angular/core';  
//esta importando a un decorador llamado Component desde '....'

@Component({
  selector: 'app-root', //APP-ROOT = etiqueta en index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  mensaje = 'Aprendiendo Angular';
  nombre ='Carly';

  getNombre(){

    return this.nombre;
  }
}
 