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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Resume;
import com.example.demo.service.ResumeService;


@RestController
@CrossOrigin
public class ResumeController {
	@Autowired
	private ResumeService rs;
	
	 @GetMapping("/getresume")
	 public List<Resume> getResumeDetails()
	 {
		 return rs.getResumeDetails();
	 }
	 @PostMapping("/postresume")
	 public void saveData(@RequestBody Resume re)
	 {
		 rs.saveResume(re);
	 }
	 
	 @PutMapping("/putresume/{id}")
	 public void updateData(@RequestBody Resume re,@PathVariable Long id)
	 {
		 re.setId(id);
		 rs.updateResume(re);
	 }
	 
	 @DeleteMapping("/deleteresume/{id}")
	 public void deleteData(@PathVariable Long id)
	 {
		 rs.deleteResume(id);
	 }
	 
}
