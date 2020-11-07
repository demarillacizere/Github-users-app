import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repoitems: any[];
  repoName:string= "pizza";

  constructor(public SearchRequestService: SearchRequestService) { 
    
  }

  findRepo () {
    this.SearchRequestService.UpdateRepo(this.repoName);
    this.SearchRequestService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }
}
