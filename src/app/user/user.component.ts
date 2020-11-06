import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {User} from '../user';
import {Repository} from '../repository';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public searchMe = 'wanjiiru';
    public githubUser: string;

    users: User ;
    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }

}
