import { Component, OnInit } from '@angular/core';
import { MoviesService} from "../../services/movies.service";
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movies = []
  posterImage = "https://image.tmdb.org/t/p/w300"
  constructor(private _moviesService: MoviesService) { 
   
  }

  ngOnInit(){
    this._moviesService.getPopularMovie().subscribe(data => {
      this.movies = data.results;
    });
  
  }
  

}
