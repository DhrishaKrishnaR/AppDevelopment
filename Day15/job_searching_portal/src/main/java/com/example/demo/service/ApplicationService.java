package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Application;
import com.example.demo.repository.ApplicationRepository;


@Service

public class ApplicationService {
	@Autowired
	private ApplicationRepository ar;
	
	public List<Application> getApplicationDetails(){
		return ar.findAll();
	}
	public void saveApplication(Application ae)
	{
		ar.save(ae);
	}
	
	public void updateApplication(Application ae)
	{
		ar.save(ae);
	}
	
	public void deleteApplication(Long id)
	{
		ar.deleteById(id);	
	}
}
