package br.com.tarefa.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import br.com.tarefa.model.Empresa;

public interface TarefaService {

	
	Empresa salvar(Empresa jogo);

	List<Empresa> listarEmpresasPorNomeEmpresaAndCnpj(String nomeEmpresa,String cnpj);
	List<Empresa> listarTodasEmpresas();
	List<Empresa> listarEmpresasPorNomeEmpresa(String nomeEmpresa);
	List<Empresa> listarEmpresasPorCnpj(String cnpj);
	void deleteEmpresa(Empresa empresa);
	Empresa findById(long id);
	

}
