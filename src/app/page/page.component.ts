import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Sport {
  name: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  sports: Sport[] = [
    {name: 'Cricket'},
    {name: 'Football'},
    {name: 'Hockey'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.sports.push({name: value.trim()});
    }
    
    if (input) {
      input.value = '';
    }
  }

  remove(sport: Sport): void {
    const index = this.sports.indexOf(sport);

    if (index >= 0) {
      this.sports.splice(index, 1);
    }
  }

  url;
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }
}
