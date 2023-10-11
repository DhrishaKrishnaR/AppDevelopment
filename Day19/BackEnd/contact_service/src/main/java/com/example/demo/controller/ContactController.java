package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {
	@Autowired
	private ContactService service;
	

	 @GetMapping("/getall")
	    public List<Contact> getContact() {
	        return service.getAllContact();
	    }
}
