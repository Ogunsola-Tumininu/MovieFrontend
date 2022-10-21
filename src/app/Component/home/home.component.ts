import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/Models/movies';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  term: string = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  Search(){
    if(this.term==""){
      alert("enter a movie title");
      return;
    }
    this.router.navigate(['/movies/'+ this.term ]);
  }

}
