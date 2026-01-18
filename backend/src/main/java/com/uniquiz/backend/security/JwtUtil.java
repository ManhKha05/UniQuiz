package com.uniquiz.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
    private final String JWT_SECRET = "3a58b1e2512a2c337fd9dfd862fc91dbab6ade09fbf63275541e6fbcdf7976da";
    private final long JWT_EXPIRATION = 1000 * 60 * 60;  //1 hour

    private Key getSigningKey() {
        return new SecretKeySpec(JWT_SECRET.getBytes(), "HmacSHA256");
    }

    public String generateToken(UserDetails userDetails) {
        return  Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractClaimsJws(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String extractUsername(String token) {
        return extractClaimsJws(token).getSubject();
    }

    public Date extractExpiration(String token) {return extractClaimsJws(token).getExpiration();}

    public boolean isTokenExpired(String token) {
        Date expiration = extractExpiration(token);
        return (expiration.before(new Date()));
    }

    public boolean validateToken(String token,  UserDetails userDetails) {
        String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
