import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { Iss } from '../../models/iss';
import { issUrl } from '../../common/constants';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent {
  issData: Iss[] = [];
  isRunning = false;
  queryDate: string;

  intervalTime: number;
  intervalSubscription: Subscription;

  constructor(private _http: HttpClient) {}

  getISSLocation() {
    this._http.get(issUrl).subscribe((data) => {
      this.issData.push({
        ...data,
        date: new Date().toISOString(),
      });
    });
  }

  startQuery() {
    this.isRunning = true;
    this.intervalSubscription = interval(this.intervalTime * 1000).subscribe(
      () => {
        this.getISSLocation();
      }
    );
  }

  stopQuery() {
    this.isRunning = false;
    this.intervalSubscription.unsubscribe();
  }
}
