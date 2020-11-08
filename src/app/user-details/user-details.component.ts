import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {User} from '../user';
import {Repository} from '../repository';
import { Router } from '@angular/router';
import {  ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  repository: Repository;
  users: User ;
    public searchRepo: string;
    public resultCount = 12;
    searchMe: string;
  constructor(private route:ActivatedRoute, public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService, private router:Router) { }

  ngOnInit(): void {
    this.searchMe = this.route.snapshot.paramMap.get('users.name');
    this.githubUserRequest.githubUser(this.searchMe);
    this.userRepos.gitUserRepos(this.users.name);
    console.log(this.userRepos);
  }
  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;

}
}
