import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEmpresa } from './cadastrar-empresa/cadastrar-empresa.component';
import { BuscarEmpresas } from './buscar-empresas/buscar-empresas.component';

const routes: Routes = [

  {path: 'cadastrar-empresa', component: CadastrarEmpresa},
  {path: 'buscar-empresas', component: BuscarEmpresas}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
