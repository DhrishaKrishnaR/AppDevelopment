package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Application;
import com.example.demo.service.ApplicationService;



@RestController
public class ApplicationController {
	@Autowired
	private ApplicationService as;
	
	 @GetMapping("/getdetail")
	 public List<Application> getApplicationDetails()
	 {
		 return as.getApplicationDetails();
	 }
	 @PostMapping("/postdetail")
	 public void saveData(@RequestBody Application ae)
	 {
		 as.saveApplication(ae);
	 }
	 
	 @PutMapping("/putdetail/{id}")
	 public void updateData(@RequestBody Application ae,@PathVariable Long id)
	 {
		 ae.setId(id);
		 as.updateApplication(ae);
	 }
	 
	 @DeleteMapping("/deletedetail/{id}")
	 public void deleteData(@PathVariable Long id)
	 {
		 as.deleteApplication(id);
	 }
	 
	
}
