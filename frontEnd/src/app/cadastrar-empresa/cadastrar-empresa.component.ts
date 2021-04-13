import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresa implements OnInit {

  empresa: Empresa = new Empresa();
  constructor(private empresaService: EmpresaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmpresa(){
    this.empresaService.createEmpresa(this.empresa).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }

  
  
  onSubmit(){
    console.log(this.empresa);
    this.saveEmpresa();
  }
}