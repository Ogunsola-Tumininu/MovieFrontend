import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  movies: any = [];

  constructor(
    private movieService: MoviesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.recentMovies();
  }

  recentMovies(){
    this.movieService.previousSearch().subscribe(data=>{
      
      if(data != null){
        this.movies = data
        //console.log("previous data",data);
      }else{

      }
    })
  }

  showDetails(title:string){
    this.router.navigate(['/detail/'+ title ]);
  }

}
