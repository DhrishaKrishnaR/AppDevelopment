package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Job;
import com.example.demo.service.JobService;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class JobController {
	@Autowired
	private JobService jjs;
	
	 @GetMapping("/getjob")
	 public List<Job> getJobDetails()
	 {
		 return jjs.getJobDetails();
	 }
	 @PostMapping("/postjob")
	 public void saveData(@RequestBody Job je)
	 {
		 jjs.saveJob(je);
	 }
	 
	 @PutMapping("/putjob{id}")
	 public void updateData(@RequestBody Job je,@PathVariable Long id)
	 {
		 je.setId(id);
		 jjs.updateJob(je);
	 }
	 
	 @DeleteMapping("/deletejob/{id}")
	 public void deleteData(@PathVariable Long id)
	 {
		 jjs.deleteJob(id);
	 }
	 
	
}