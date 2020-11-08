import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repoitems: Repository;
  repoName:string= "Moringa";

  constructor(public SearchRequestService: SearchRequestService) { 
    this.repoitems = new Repository ("","","",new Date());
    this.SearchRequestService.searchrepos().subscribe(repoitems => {
      console.log(repoitems);
      
    });
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
