package net.javaspringboot.ems.Entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    // IMPORTANT: Change from 'role' to 'roles'
    @Column(nullable = false)
    private String roles;   // example → "ROLE_USER", "ROLE_ADMIN"
}
