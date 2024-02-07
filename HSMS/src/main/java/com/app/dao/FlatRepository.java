package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Flat;

public interface FlatRepository extends JpaRepository<Flat, Long> {

}
