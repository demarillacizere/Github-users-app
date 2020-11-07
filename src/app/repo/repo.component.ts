import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repository: Repository;
    public searchName='pizza';
    public gitRepo:string;
    public resultCount =10;
    
    searchRepos(name) {
        this.gitRepo=''
        this.searchName = name;
        this.ngOnInit();
    }

    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
      this.gitRepoRequest.gitRepos(this.searchName);
      this.repository = this.gitRepoRequest.repository;
      console.log(this.repository);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchName);

      }


}
