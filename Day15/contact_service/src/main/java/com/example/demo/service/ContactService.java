package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService {
	
	@Autowired
	private ContactRepository repository;
	 @Autowired
	 private RestTemplate restTemplate;
	 public List<Contact> getAllContact() {
	        // Make an HTTP GET request to the ContactUs project's /getfeedback endpoint
	        String url = "http://localhost:8080/getfeedback"; 

	        List<Contact> feedbackList = restTemplate.getForObject(url, List.class);

	        return feedbackList;
	 }
	public void postData(Contact contactus) {
		repository.save(contactus);
	}

}
