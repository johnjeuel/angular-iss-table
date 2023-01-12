import { Component, OnInit, Input } from '@angular/core';
import { Iss } from '../models/iss';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css'],
})
export class IssComponent {
  issData: Iss[] = [];

  constructor() {}

  ngOnInit() {}

  /**
   * Handles the data emitted by the child component.
   * @param data which is a type of Iss array.
   */
  handleData(data: Iss[]): void {
    this.issData = data;
  }
}
