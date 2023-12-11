import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPokemons()
  }

  getPokemons(){
    this.apiService.get("tasks/").then(r => {
      console.log(r);
      
    })
  }

}
