import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/Models/movies';
import { MoviesService } from '../Services/movies.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  term: string = "";
  movies: any=[];
  isLoading: boolean = true;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const paramMap = this.route.paramMap;
    const queryParamMap = this.route.queryParamMap;
    

    combineLatest([
      paramMap, // error here
      queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('term');//the 0 means the 1st 1 which is paramMap from above
      let page = combined[1].get('page');

      console.log(id);

      this.searchMovies(id);
    });
  }

  searchMovies(id:any){
    this.movieService.searchMovies(id).subscribe(data=>{
      
      if(data != null){
        this.isLoading=false;
        this.movies = data
        
        //console.log("data",data);
      }else{
        this.isLoading=false;
        alert("Unable to fetch data");
        
      }
    })
  }

  showDetails(title:string){
    this.router.navigate(['/detail/'+ title ]);
  }
}
