package br.com.tarefa.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;

import br.com.tarefa.model.Empresa;
import br.com.tarefa.service.TarefaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/empresa", produces = "application/json")
public class EmpresaController {

	@Autowired
	private TarefaService empresaService;
	
	@RequestMapping(value="/listar/{params}", method = {RequestMethod.GET, RequestMethod.OPTIONS})
	public ResponseEntity<List<Empresa>> listarPorNome(@PathVariable("params") List<String> paramsDo) throws JsonProcessingException {
		System.out.println(paramsDo);
		if(paramsDo.size()==1) {
			
			return ResponseEntity.ok(empresaService.listarTodasEmpresas());
		}	
		else if(paramsDo.size()==2 && paramsDo.get(0).equals("nome")) {
			return ResponseEntity.ok(empresaService.listarEmpresasPorNomeEmpresa( paramsDo.get(1)));
		}
		else if(paramsDo.size()==2 && paramsDo.get(0).equals("cnpj")) {
			return ResponseEntity.ok(empresaService.listarEmpresasPorCnpj( paramsDo.get(1)));
		}
		else
		return ResponseEntity.ok(empresaService.listarEmpresasPorNomeEmpresaAndCnpj(paramsDo.get(0),paramsDo.get(1)));
	}
	
	@PostMapping(value="/salvar")
	public ResponseEntity<Empresa> salvarEmpresa(@RequestBody Empresa empresa) throws Exception  {
		Empresa t = empresaService.salvar(empresa);
		return ResponseEntity.ok(t);
	}
	@DeleteMapping(value="/excluir/{id}")
	public void deletarEmpresa(@PathVariable("id") Long id) throws Exception  {
		Empresa t = empresaService.findById(id);
		
		 empresaService.deleteEmpresa(t);
		
	}
	

	
}
