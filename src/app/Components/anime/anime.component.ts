import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Query_anime } from '../../graphql/graphql.queries';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
   arr : any = [];
   loading = true;
   error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
     .watchQuery({
       query: Query_anime,
     }).valueChanges.subscribe((result : any) =>{
      console.log(result);

       this.arr = result?.data?.characters?.results;
      // console.log(this.arr);
       this.loading= result.loading;
       this.error = result.error;
       //console.log(this.loading);
      // console.log(this.error);
     });
  }

}
