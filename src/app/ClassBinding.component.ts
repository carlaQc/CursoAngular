import { Component } from '@angular/core';  

@Component({
  selector: 'classBinding', 
  template: `
  <button [class.activo] = "isActive">  Mi Boton</button>
  `
  
  ,
  styles: [`
  .activo{background: red;
}
`]
})


export class ClassBinding {
    isActive=true;
  
}

 