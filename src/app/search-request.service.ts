import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Repository} from './repository';
import {User} from './user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { repoitems } from './repoitems';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  repository: Repository;
    users: User;
    newRepository: any;
    searchRepo: any;
    repoName: string;
    constructor(private http: HttpClient) {
        this.repository = new Repository('', '', '', new Date());
        this.users = new User('', '','', '', 0, '', new Date(), 0, 0);}
        githubUser(searchName) {
          interface ApiResponse {
              name: string;
              html_url: string;
              description: string;
              created_at: Date;
              login: string;
              public_repos: number;
              followers: number;
              following: number;
              avatar_url: string;
              bio: string;
          }
  
          const promise = new Promise((resolve, reject) => {
              this.http.get<ApiResponse>('https://api.github.com/users/' + searchName ).toPromise().then(getResponse => {
                  this.users.name = getResponse.name;
                  this.users.html_url = getResponse.html_url;
                  this.users.login = getResponse.login;
                  this.users.avatar_url = getResponse.avatar_url;
                  this.users.public_repos = getResponse.public_repos;
                  this.users.created_at = getResponse.created_at;
                  this.users.followers = getResponse.followers;
                  this.users.following = getResponse.following;
                  this.users.bio = getResponse.bio;
                  resolve();
              },error => {
                console.log("Error-unable to get Repository")
                reject(error);
              });
          });
          return promise;

    }
    gitUserRepos(searchMe) {
      interface ApiResponse {
          name: string;
          description: string;
          created_at: Date;
      }

      const myPromise = new Promise((resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=').toPromise().then(getRepoResponse => {
              this.newRepository = getRepoResponse;
              resolve();
          }, error => {
              this.newRepository = '';
              console.log("Error-unable to get Repository")
              reject(error);
          });
      });
      return myPromise;
  }


  gitRepos(searchName) {
      interface ApiResponse {
          items: any;
      }

      const promise = new Promise((resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' ).toPromise().then(getRepoResponse => {
              this.searchRepo = getRepoResponse.items;

              resolve();
            }, error => {
                this.searchRepo = 'Error-unable to get Repository';
                reject(error);
            });
        });
        return promise;
    }
    searchrepos() {
        return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
          headers: new HttpHeaders()
        }))
      }
      UpdateRepo(repo:string) {
        this.repoName = repo;
        return repoitems;
      }
}
