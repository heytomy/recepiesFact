import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-recettes',
  templateUrl: './page-recettes.component.html',
  styleUrls: ['./page-recettes.component.css']
})
export class PageRecettesComponent implements OnInit {

  constructor(private _Http: HttpClient) { }

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e09070b4b4msh250a66c95cbf5b5p1bfc62jsna373a4d2b8c1',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
    })
    let url = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0'

    this._Http.get<any>(url,
      {headers: headers}).subscribe(data => {console.log(data)})

  }
}
