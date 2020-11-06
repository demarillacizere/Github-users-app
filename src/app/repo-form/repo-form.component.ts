import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../search';
@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {

  searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();

    searchFor(data){
        this.getName.emit(data.value.find);
        console.log(data.value.find)
        data.reset();
    }


  constructor() { }

  ngOnInit() {
  }

}
