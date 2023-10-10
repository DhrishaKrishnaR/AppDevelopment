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

import com.example.demo.entity.SignUp;
import com.example.demo.service.SignUpService;


@RestController
@CrossOrigin
public class SignUpController {
	@Autowired
	private SignUpService ss;
	
	 @GetMapping("/getsignup")
	 public List<SignUp> getSignUp()
	 {
		 return ss.getSignUp();
	 }
	 @PostMapping("/postsignup")
	 public void save(@RequestBody SignUp se)
	 {
		 ss.save(se);
	 }
	 
	 @PutMapping("/putsignup/{id}")
	 public void update(@RequestBody SignUp se,@PathVariable int id)
	 {
		 se.setRegisterId(id);
		 ss.update(se);
	 }
	 
	 @DeleteMapping("/deletesignup/{id}")
	 public void delete(@PathVariable int id)
	 {
		 ss.delete(id);
	 }
	 
}
