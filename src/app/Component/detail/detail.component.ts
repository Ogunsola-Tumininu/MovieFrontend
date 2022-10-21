import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from 'src/app/Models/movie-detail';
import { MoviesService } from '../Services/movies.service';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movie: any ;
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
      let title = combined[0].get('title');//the 0 means the 1st 1 which is paramMap from above
      let page = combined[1].get('page');

      //console.log(title);

      this.detail(title);
    });
  }

  detail(title:any){
    this.movieService.movieDetail(title).subscribe(data=>{
      
      if(data != null){
        this.isLoading=false;
        this.movie = data
        //console.log("data",data);
      }else{
        this.isLoading=false;
        alert("Unable to fetch data");
      }
    })
  }

}
