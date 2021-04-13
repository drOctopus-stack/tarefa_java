import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import {PanelModule} from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarEmpresa } from './cadastrar-empresa/cadastrar-empresa.component';
import { BuscarEmpresas } from './buscar-empresas/buscar-empresas.component';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,CadastrarEmpresa,BuscarEmpresas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    TableModule
    
    
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
