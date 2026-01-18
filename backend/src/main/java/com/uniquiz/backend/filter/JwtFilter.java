package com.uniquiz.backend.filter;

import com.uniquiz.backend.security.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

       String header = request.getHeader("Authorization");
       if (header == null || !header.startsWith("Bearer ")) {
           filterChain.doFilter(request,response);
           return;
       }
       String token = header.substring(7);
       String username = null;
       try {
           username = jwtUtil.extractUsername(token);
       } catch (Exception e) {
           // Token sai / hết hạn
           SecurityContextHolder.clearContext();
           filterChain.doFilter(request, response);
           return;
       }
       if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
           UserDetails userDetails = userDetailsService.loadUserByUsername(username);
           if (jwtUtil.validateToken(token, userDetails)) {
               UsernamePasswordAuthenticationToken authentication =
                       new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
               authentication.setDetails(authentication.getDetails());
               SecurityContextHolder.getContext().setAuthentication(authentication);
           }
       }
       filterChain.doFilter(request,response);
    }
}
