package iitb.cs699.playerStatAnalyser.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import iitb.cs699.playerStatAnalyser.entity.VsCountryBowler;

public interface VsCountryBowlerRepository extends JpaRepository<VsCountryBowler, Integer> {

	List<VsCountryBowler> findBypId(Integer pid);
	
	

}
