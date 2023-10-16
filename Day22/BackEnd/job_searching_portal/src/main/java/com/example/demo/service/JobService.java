package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Job;
import com.example.demo.repository.JobRepository;

@Service
public class JobService {
	@Autowired
    private JobRepository jr;

    public List<Job> getJobDetails(){
		return jr.findAll();
	}
	public void saveJob(Job je)
	{
		jr.save(je);
	}
	
	public void updateJob(Job je)
	{
		jr.save(je);
	}
	
	public void deleteJob(Long id)
	{
		jr.deleteById(id);	
	}

}

