import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Cadastrar Empresa', icon: 'pi pi-fw pi-home',routerLink:'cadastrar-empresa'},
          {label: 'Buscar Empresa', icon: 'pi pi-fw pi-calendar',routerLink:'buscar-empresas'},
          
      ];

    }

}
