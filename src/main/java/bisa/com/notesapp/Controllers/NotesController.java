package bisa.com.notesapp.Controllers;

import bisa.com.notesapp.Models.Note;
import bisa.com.notesapp.Repositories.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/notes")
public class NotesController {

    @Autowired
    private NotesRepository repository;


    @GetMapping
    public List<Note> list() {

        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Note note) {
        repository.save(note);
    }

    @GetMapping("/{id}")
    public Note get(@PathVariable("id") long id) {

        return repository.getOne(id);
    }
}
