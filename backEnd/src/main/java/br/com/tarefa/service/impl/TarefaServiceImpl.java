package br.com.tarefa.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.tarefa.model.Empresa;
import br.com.tarefa.repository.TarefaRepository;
import br.com.tarefa.service.TarefaService;

@Service
public class TarefaServiceImpl implements TarefaService {

	@Autowired
	private TarefaRepository empresaRepository;
	
	@Override
	public Empresa salvar(Empresa empresa) {
		

		return empresaRepository.save(empresa);
	}

	@Override
	public List<Empresa> listarEmpresasPorNomeEmpresaAndCnpj(String nomeEmpresa,String cnpj) {
		
		return empresaRepository.findAllByNomeEmpresaAndCnpj(nomeEmpresa,cnpj);
	}
	
	@Override
	public List<Empresa> listarEmpresasPorNomeEmpresa(String nomeEmpresa) {
		
		return empresaRepository.findAllByNomeEmpresa(nomeEmpresa);
	}
	
	
	@Override
	public List<Empresa> listarEmpresasPorCnpj(String cnpj) {
		
		return empresaRepository.findAllByCnpj(cnpj);
	}
	
	@Override
	public List<Empresa> listarTodasEmpresas() {
		
		return empresaRepository.findAll();
	}
	@Override
	public void deleteEmpresa(Empresa empresa){
		 empresaRepository.delete(empresa);
	}
	
	@Override
	public Empresa findById(long id){
		return empresaRepository.findById(id);
	}

}
