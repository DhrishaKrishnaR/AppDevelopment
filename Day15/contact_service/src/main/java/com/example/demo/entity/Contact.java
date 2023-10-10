package com.example.demo.entity;

public class Contact {
	private int contactid;
	  private String name;
	  private String email;
	  private String message;
	public int getContactid() {
		return contactid;
	}
	public void setContactid(int contactid) {
		this.contactid = contactid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Contact(int contactid, String name, String email, String message) {
		super();
		this.contactid = contactid;
		this.name = name;
		this.email = email;
		this.message = message;
	}
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	  
}
