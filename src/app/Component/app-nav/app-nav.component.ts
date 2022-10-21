import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  term: string = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  Search(){
    if(this.term==""){
      alert("enter a movie title" + this.term);
      return;
    }
    this.router.navigate(['/movies/'+ this.term ]);
  }

}
