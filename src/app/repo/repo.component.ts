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
    public searchRepo: string;
    public resultCount = 12;

    searchRepos(repository) {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }


}
