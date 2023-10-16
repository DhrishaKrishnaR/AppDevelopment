package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
	
	private final   JwtAuthenticationFilter jwtAuthFilter ;
	private final AuthenticationProvider authenticationProvider ;

	@Bean
	 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http .csrf().disable()
		.authorizeRequests()
		.requestMatchers("/auth/**")
		.permitAll()
		.anyRequest().authenticated().and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().authenticationProvider(authenticationProvider)
		.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}
	@Bean
	    public CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedHeaders(Api.HEADERS);
	        configuration.setAllowCredentials(true);
	        configuration.setAllowedMethods(Api.METHODS);
	        configuration.setAllowedOrigins(Api.ORIGINS);
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }
		   
	}


