package bisa.com.notesapp.Repositories;

import bisa.com.notesapp.Models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note, Long> {
}
