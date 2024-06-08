import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'angular-app';
  
  movies: string[] = [];
  movieText = '';

  ngOnInit() {
    const existingMovies = localStorage.getItem('movies');
    this.movies = existingMovies ? JSON.parse(existingMovies) : [];
  }

  addMovie() {
    this.movieText = this.movieText.trim();
    if (this.movieText) {
      this.movies.push(this.movieText);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
    this.movieText = '';
  }

  deleteMovie(movie: string) {
    this.movies = this.movies.filter((m) => m !== movie);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
