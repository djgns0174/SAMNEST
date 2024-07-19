package com.example.samnest_back.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(new AntPathRequestMatcher("/user/register"))
                        .ignoringRequestMatchers(new AntPathRequestMatcher("/user/checkIdDuplicate"))
                )
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers(new AntPathRequestMatcher("/user/register")).permitAll() // '/user/register' 경로 허용
                                .requestMatchers(new AntPathRequestMatcher("/user/checkIdDuplicate")).permitAll() // 아이디 중복 허용
                                .anyRequest().authenticated()
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
