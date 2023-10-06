package com.example.demo.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.Builder;
import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.entity.SignUp;
import com.example.demo.entity.enumerate.Role;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.SignUpRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService 
{
	private final SignUpRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice ;
	 private final AuthenticationManager authenticationManager ;
	 public AuthenticationResponse register(RegisterRequest request) {
			// TODO Auto-generated method stub				
		    var user = SignUp.builder()
		            .username(request.getUsername())
		            .emailid(request.getEmailid())
		            .mobileno(request.getMobileno())
		            .password(passwordEncoder.encode(request.getPassword()))
		            .role(Role.USER)
		            .build();
		    repository.save(user); 
		    var jwtToken = jwtservice.generateToken(user);
		    
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}

	 public AuthenticationResponse authenticate(AuthenticationRequest request) {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
					request.getUsername(),
					request.getPassword()
					)
					);
					var user = repository.findByUsername(request.getUsername())
							.orElseThrow();
					 var jwtToken = jwtservice.generateToken(user);
					    
						return AuthenticationResponse.builder()
								.token(jwtToken)
								.build();
		}

}
