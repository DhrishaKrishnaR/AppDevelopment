package com.example.demo.entity;

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

public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

    	private Long id;
	  	private String name;
	    private String mail;
	    private String mobilenum;
	    private String education;
	    private String graduationYear;
	    private String expectedSalary;
	    private String yearsOfExperience;
	    private String githubLink;
	    private String linkedinLink;


}
