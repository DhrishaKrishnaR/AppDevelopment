package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.SignUp;
import com.example.demo.repository.SignUpRepository;


@Service
public class SignUpService {
	@Autowired
	private SignUpRepository sr;
	
	public List<SignUp> getSignUp(){
		return sr.findAll();
	}
	public void save(SignUp se)
	{
		sr.save(se);
	}
	
	public void update(SignUp se)
	{
		sr.save(se);
	}
	
	public void delete(int id)
	{
		sr.deleteById(id);	
	}

}
