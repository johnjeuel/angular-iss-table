import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { Iss } from '../../models/iss';
import { IssService } from '../../../app/services/_iss.service';

@Component({
  selector: 'app-interval-input',
  templateUrl: './interval-input.component.html',
  styleUrls: ['./interval-input.component.css'],
})
export class IntervalInputComponent {
  issData: Iss[] = [];
  isRunning: boolean = false;
  hasError: boolean = false;

  intervalTime: number;
  intervalSubscription: Subscription;

  /**
   * Emit output data to parent.
   */
  @Output() dataEvent = new EventEmitter<Iss[]>();

  constructor(private _issService: IssService) {}

  /**
   * Starts the request to API by setting a time interval.
   */
  startQuery(): void {
    if (!this.intervalTime) {
      this.hasError = true;
      return;
    }

    this.hasError = false;
    this.isRunning = true;
    this.intervalSubscription = interval(this.intervalTime * 1000).subscribe(
      () =>
        this._issService.getISSLocation().then((iss) => {
          this.issData.push({
            ...iss,
            date: new Date().toISOString(),
          });

          this.dataEvent.emit(this.issData);
        })
    );
  }

  /**
   * Stops the request to API.
   */
  stopQuery(): void {
    this.isRunning = false;
    this.intervalSubscription.unsubscribe();
  }
}
