import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';
import { config } from './config'
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {

  }

  doLogin(email, password) {
    var user = JSON.stringify
      ({
        "username": email,
        "password": password
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "login", user).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }

  ApplyAnnualandCasualLeaveRequest(username, from , to,comment, timeinday) {
    var request = JSON.stringify
      ({
        "username": username,
        "From": from,
        "To" : to,
        "Comment" : comment,
        "Timeinday" : timeinday

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApplyAnnualandCasualLeaveRequest", request).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }
 
  ApproveCasualLeaveRequest(username, from , to,comment, MedicalUrl) {
    var request = JSON.stringify
      ({
        "username": username,
        "From": from,
        "To" : to,
        "Comment" : comment,
       

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApproveCasualLeaveRequest", request).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }
  ApproveAnnualLeaveRequest(username, from , to,comment, MedicalUrl) {
    var request = JSON.stringify
      ({
        "username": username,
        "From": from,
        "To" : to,
        "Comment" : comment,
     

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApproveAnnualLeaveRequest", request).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }

  ViewMyRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ViewMyRequests", request).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }

  ViewMyReviewedRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ViewMyReviewedRequests", request).timeout(config.getTimeout).subscribe(res => {
        try {
          resolve(res);
        }
        catch (e) {
          reject(false);
        }
      },
        error => {
          reject(error);
        });
    });
  }
}
