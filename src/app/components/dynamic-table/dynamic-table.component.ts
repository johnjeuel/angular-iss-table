import { Component, Input } from '@angular/core';
import { Iss } from '../../models/iss';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent {
  @Input() issData: Iss[] = [];

  constructor() {}
}
