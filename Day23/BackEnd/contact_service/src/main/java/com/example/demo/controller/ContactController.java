package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.entity.Contact;

import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/contactus")
public class ContactController 
{
	@Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping("/getall")
    public Flux<Contact> getAllContact() {
        return webClientBuilder.baseUrl("http://localhost:8080").build()
                .get()
                .uri("auth/getContact")
                .retrieve()
                .bodyToFlux(Contact.class);
    }
}