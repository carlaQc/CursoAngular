import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class UsuariosService{

    getUsuarios(){
        return[
            {
                "nombre": "Luis Salinas",
                "edad": 20,
                "hobby": 'cantar'
            },
            {
                "nombre": "Mauricio Alvarez",
                "edad": 30,
                "hobby": 'patinar'
            },
            {
                "nombre": "Carly Quenallata",
                "edad": 22,
                "hobby": 'jugar'
            }
        ];

    }
}