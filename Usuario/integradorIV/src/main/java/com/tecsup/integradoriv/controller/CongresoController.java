package com.tecsup.integradoriv.controller;

import com.tecsup.integradoriv.model.Congreso;
import com.tecsup.integradoriv.repository.CongresoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/congresistas")
@CrossOrigin(origins = "*") // para permitir llamadas desde React en dev
public class CongresoController {

    private final CongresoRepository repo;

    public CongresoController(CongresoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Congreso> listarTodos() {
        return repo.findAll();
    }

    @PostMapping
    public Congreso crear(@RequestBody Congreso congresista) {
        return repo.save    (congresista);
    }
}
