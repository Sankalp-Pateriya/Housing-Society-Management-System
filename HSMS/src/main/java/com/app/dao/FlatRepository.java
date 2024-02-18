package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Flat;

public interface FlatRepository extends JpaRepository<Flat, Long> {

	List<Flat> findByBuildingId(Long id);

	List<Flat> findByUserId(long user_id);

}
