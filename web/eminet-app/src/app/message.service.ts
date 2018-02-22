import { Injectable } from '@angular/core';

export class LogMessage {
  //sender: string;
  //message: string;

  constructor(public sender: string, public message: string) { }
}


@Injectable()
export class MessageService {

  messages: LogMessage[] = [];

  constructor() { }

  log(msg: LogMessage) {
    this.messages.push(msg);
  }

  clear() {
    this.messages = [];
  }

}
