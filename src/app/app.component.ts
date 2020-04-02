import { Component } from '@angular/core';  
//esta importando a un decorador llamado COMPONENT desde 

@Component({
  selector: 'app-root', //APP-ROOt = etiqueta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* estamos utilizando a la clase APPCOMPONENT 
 i dentro de esta clase tenemos a una variable laamada
 TITLE cuio valor es HOLA MUNDO, i para que esta clase este disponible
  afuera de este documento estamos utilizando EXPORT, asi
  mismo para que todo el doc. se convierta en un componente
  estamos utilizando al @COMPONENT*/
export class AppComponent {
  mensaje = 'Aprendiendo Angular';
  nombre ='Carli';

  getNombre(){

    return this.nombre;
  }
}
 