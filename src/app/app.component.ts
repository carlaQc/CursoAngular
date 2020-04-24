//import { UsuariosService } from './usuarios.service';
import { Component } from '@angular/core';  
import { FormGroup, FormControl, Validators } from '@angular/forms';


//esta importando a un decorador llamado Component desde '....'

@Component({
  selector: 'app-root', //APP-ROOT = etiqueta en index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})

/*
export class AppComponent {
  mensaje = 'Aprendiendo Angular';
  nombre ='Carly';

  getNombre(){

    return this.nombre;
  }
}
 
//TWO WAY BINDING - 15

export class AppComponent{
  persona = {
      nombre:'Carly',
      edad: 20
  }
}

// SERVICIOS HTTP -16

export class AppComponent{
  personas : any= [];           //almacenamos cualquier tipo de dato 

  constructor() { 
    let usuario =new UsuariosService();
    this.personas =usuario.getUsuarios();

  }

} 

//Dependency Injection - 17

export class AppComponent{
  personas : any= [];        //almacenamos cualquier tipo de dato 

  constructor(private usuarioservice : UsuariosService) { 
    this.personas = usuarioservice.getUsuarios();

  }

}
*/

// Reactive Forms - Formularios

export class AppComponent{
  constructor(){}

  miFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('', Validators.required)
    


  });
}
