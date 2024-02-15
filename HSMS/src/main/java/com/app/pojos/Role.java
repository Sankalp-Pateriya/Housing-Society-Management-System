package com.app.pojos;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum Role {
	USER, SECRETARY, ADMIN;

	@JsonCreator
	 public static Role fromString(String value) {
		return Role.valueOf(value.toUpperCase());
	}
}
