import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  latestMovies: Movie[] = [new Movie('Hello movie', 'Test movie description', 'http://i.imgur.com/g27lAMl.png'),
  new Movie('Hello movie 1', 'Test movie description 1', 'http://i.imgur.com/g27lAMl.png'),
  new Movie('Hello movie 2', 'Test movie description 2', 'http://i.imgur.com/g27lAMl.png'),
  new Movie('Hello movie 3', 'Test movie description 3', 'http://i.imgur.com/g27lAMl.png')];
  constructor() { }

  ngOnInit() {
  }

}
