import { Injectable } from '@angular/core';
// con Angular DI il servizio sarà accessibile ad altri componenti e moduli
// con providedIn: root il servizio sarà accessibile ovunque nell'app
@Injectable({
  providedIn: 'root',
})

  export class LogService {
    log(msg: any) {
      console.log(new Date() + ": " + JSON.stringify(msg));
    }
  }