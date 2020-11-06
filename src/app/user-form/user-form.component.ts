import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../search';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

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
