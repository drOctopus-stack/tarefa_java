package br.com.tarefa.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import br.com.tarefa.model.Empresa;

@Repository
public interface TarefaRepository extends JpaRepository<Empresa, Long>{
	

	public List<Empresa> findAllByNomeEmpresaAndCnpj(String nomeEmpresa,String cnpj);
	public List<Empresa> findAllByNomeEmpresa(String nomeEmpresa);
	public List<Empresa> findAllByCnpj(String cnpj);
	public List<Empresa> findAll();
	public void delete(Empresa empresa);
	public Empresa findById(long id);
}
