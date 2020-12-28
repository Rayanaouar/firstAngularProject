import { Component, OnInit } from '@angular/core';
import { MoviesService} from "../../services/movies.service";
import { Movie } from '../../services/movie';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  public movies : Movie[] = []
  constructor(private _moviesService: MoviesService) { 
    console.log("hhhh");
  }

  ngOnInit(){
    this._moviesService.getPopularMovie().subscribe(data => {
      this.movies = data;
    });
  
  
  }

}
