import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { LogMessage, MessageService } from './message.service';

import { Device, DeviceDescriptor } from './device';


@Injectable()
export class DeviceService {

  private deviceListUrl = 'api/devicelist';  // URL to web api

  constructor(private http: HttpClient, private logService: MessageService) { }


  private log(message: string) {
    this.logService.log(new LogMessage('DeviceService', message));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceListUrl).pipe(
      tap(heroes => this.log(`fetched devices`)),
      catchError(this.handleError('getHeroes', []))
    );;
  }
}
