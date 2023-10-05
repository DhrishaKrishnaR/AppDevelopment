package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SignUp {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int registerId;
	private String name;
	private String phno;
	@Column(unique = true)
	private String emailid;
	private String password;
	private String confirmpassword;

}
