package com.example.demo.model;

import java.util.List;

import com.example.demo.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequiredResponse 
{
	private User user;
	private List<Contact> contact;

}