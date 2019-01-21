package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Members;
import com.revature.repositories.MembersDAO;
import com.revature.service.AuthService;
import com.revature.service.MembersService;

@RestController
@RequestMapping(value="/members")
public class MembersController {

	MembersService us = new MembersService();
	AuthService as = new AuthService();
	private MembersDAO md;
	
	@Autowired
	public void setMembersDAO(MembersDAO md) {
		this.md = md;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Members>> getAllMembers(){
		return new ResponseEntity<>(md.findAll(), HttpStatus.OK);
	}
	@PostMapping("/addUser")
	public ResponseEntity<String> addUser(@RequestBody Members user) {

		ResponseEntity<String> resp = null;
		try {
			md.save(user);
			resp = new ResponseEntity<>("USER CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE USER", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/login")
	public String loginMember(@RequestParam(name="username") String username, @RequestParam(name="password") String password, Model m) {

	Members user = as.isValid(username, password);
		if(user == null) {
		return "Not a valid user";
		} else if(user.getUserRole().getRole() == "admin"){
/*			return ("{\"username\":\"" + user.getUsername()
			+ "\",\"firstName\":\"" + user.getFirstName()
			+ "\",\"lastName\":\"" + user.getLastName()
			+ "\",\"role\":\"" + user.getUserRole().getRole());*/
			return "redirect:http://localhost:4200/adminPage";
		}else {
			return "redirect:http://localhost:4200/memberPage";
		}
	}
}