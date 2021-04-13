import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa'

import { EmpresaService } from '../empresa.service'
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
@Component({
  selector: 'buscar-empresas',
  templateUrl: './buscar-empresas.component.html',
  styleUrls: ['./buscar-empresas.component.css']
})
export class BuscarEmpresas implements OnInit {

  empresas: Empresa[];
  params: Array<String>;
  empresa: Empresa = new Empresa();

  constructor(private empresaService: EmpresaService,
    private router: Router) { }

  ngOnInit(): void {
    
  }


 

buscarEmpresas(nome:String,cnpj:String)
{
  if((nome==null || nome=="") && (cnpj==null || cnpj=="")){
    this.params=["none"]
  }
  else if(nome==null || nome=="" ){
    this.params= [ "cnpj",cnpj]
  }
  else if(cnpj==null || cnpj=="") {
    this.params= [ "nome",nome ]
  }
  else{
    this.params= [ nome,cnpj,"full" ]
  }
  
  this.empresaService.getEmpresasList(this.params).subscribe(data => {
      this.empresas = data;
     

});
}

  
updateEmpresa(id: number){
  this.router.navigate(['update-empresa', id]);
}

deleteEmpresa(id: number){
  alert("tem certeza que deseja excluir ?");
  this.empresaService.deleteEmpresa(id).subscribe( data => {
    console.log(data);
    this.buscarEmpresas("","");
  })
}
 

  
  
}