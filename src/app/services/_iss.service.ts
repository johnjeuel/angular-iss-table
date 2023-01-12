import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { issUrl } from '../common/constants';
import { Iss } from '../models/iss';

@Injectable({
  providedIn: 'root',
})
export class IssService {
  constructor(private _http: HttpClient) {}

  async getISSLocation() {
    try {
      const issResponse = this._http.get(issUrl).toPromise();
      return issResponse;
    } catch (e) {
      console.log(e);
    }
  }
}
