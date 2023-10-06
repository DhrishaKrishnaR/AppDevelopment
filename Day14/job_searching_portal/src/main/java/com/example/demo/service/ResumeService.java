package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entity.Resume;
import com.example.demo.repository.ResumeRepository;

public class ResumeService {
	@Autowired
	private ResumeRepository rr;
	
	public List<Resume> getResumeDetails(){
		return rr.findAll();
	}
	public void saveResume(Resume re)
	{
		rr.save(re);
	}
	
	public void updateResume(Resume re)
	{
		rr.save(re);
	}
	
	public void deleteResume(Long id)
	{
		rr.deleteById(id);	
	}
}
