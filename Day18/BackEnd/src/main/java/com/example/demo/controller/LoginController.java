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

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;



@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	private LoginService ls;
	
	 @GetMapping("/getlogin")
	 public List<Login> getLoginDetails()
	 {
		 return ls.getLoginDetails();
	 }
	 @PostMapping("/postlogin")
	 public void saveData(@RequestBody Login le)
	 {
		 ls.saveData(le);
	 }
	 
	 @PutMapping("/putlogin/{id}")
	 public void updateData(@RequestBody Login le,@PathVariable int id)
	 {
		 le.setUserId(id);
		 ls.updateData(le);
	 }
	 
	 @DeleteMapping("/deletelogin/{id}")
	 public void deleteData(@PathVariable int id)
	 {
		 ls.deleteData(id);
	 }
	 
}
