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
  ApplyBussinesstripRequest(username, from , to,comment, Destination) {
    var request = JSON.stringify
      ({
        "username": username,
        "From": from,
        "To" : to,
        "Comment" : comment,
        "Destination" : Destination

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApplyBussinesstripRequest", request).timeout(config.getTimeout).subscribe(res => {
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
  ApplyReciptClaimRequest(username, Amount , comment, DueDate,ReciptLink) {
    var request = JSON.stringify
      ({
        "username": username,
        "Amount": Amount,
        "DueDate" : DueDate,
        "Comment" : comment,
        "ReciptLink" : ReciptLink
       

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApplyReciptClaimRequest", request).timeout(config.getTimeout).subscribe(res => {
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
  ApplyWorkFromHomeRequest(username, Amount , comment, Startdate,Enddate) {
    var request = JSON.stringify
      ({
        "username": username,
        "Startdate": Startdate,
        "Enddate" : Enddate,
        "Comment" : comment
        
       

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApplyWorkFromHomeRequest", request).timeout(config.getTimeout).subscribe(res => {
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

  ViewMyInfo(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ViewMyInfo", request).timeout(config.getTimeout).subscribe(res => {
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

HRorOwnerorAdminViewEmployees(username) {
    var request = JSON.stringify
      ({
        "username": username,
 
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "HRorOwnerorAdminViewEmployees", request).timeout(config.getTimeout).subscribe(res => {
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
  HRorOwnerorAdminViewEmployee(username,viewedusername) {
    var request = JSON.stringify
      ({
        "username": username,
        "viewedusername": viewedusername,
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "HRorOwnerorAdminViewEmployee", request).timeout(config.getTimeout).subscribe(res => {
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
  EmployeeViewEmployees(username) {
    var request = JSON.stringify
      ({
        "username": username,
 
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "EmployeeViewEmployees", request).timeout(config.getTimeout).subscribe(res => {
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
  EmployeeViewEmployee(username,viewedusername) {
    var request = JSON.stringify
      ({
        "username": username,
        "viewedusername": viewedusername,
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "EmployeeViewEmployee", request).timeout(config.getTimeout).subscribe(res => {
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
  AddHrEmployee(   AdderUsername   , username  , Name   , NumberOfAnnualVacations  , NumberOfCasualVacations  ,  Gender  , Email  ,  Address  ,   Nationality  , 
    SocialStatus  ,  NumberOfDependencies  , University  ,   Degree  ,   FieldStudy  ,    CarrierLevel  ,     Interest  ,  YearsOfExperience  ,  JobTitle  , AboveManagerusername  ,
    Password  , EmployeeID  , BasicSalary  , Allowance  , Mobile  ) {
    var request = JSON.stringify
      ({
  "username": username,
  "AdderUsername": AdderUsername , 
  "Name":Name   ,
  "NumberOfAnnualVacations" : NumberOfAnnualVacations  ,
  "NumberOfCasualVacations": NumberOfCasualVacations ,  
  "Gender":Gender  ,
  "Email": Email , 
  "Address":Address  ,   
  "Nationality":Nationality  , 
  "SocialStatus" :SocialStatus, 
  "NumberOfDependencies" :NumberOfDependencies ,
  "University" :  University,  
   "Degree" : Degree ,  
  "FieldStudy" :FieldStudy ,   
  "CarrierLevel" : CarrierLevel ,    
  "Interest" :Interest  ,  
  "YearsOfExperience" :YearsOfExperience  , 
  "JobTitle" : JobTitle,
   "AboveManagerusername" :AboveManagerusername  ,
  "Password" : Password ,
    "EmployeeID" : EmployeeID,
    "BasicSalary" :BasicSalary  , 
    "Allowance":Allowance  , 
    "Mobile" : Mobile
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "AddHrEmployee", request).timeout(config.getTimeout).subscribe(res => {
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
  AddManagerEmployee(   AdderUsername   , username  , Name   , NumberOfAnnualVacations  , NumberOfCasualVacations  ,  Gender  , Email  ,  Address  ,   Nationality  , 
    SocialStatus  ,  NumberOfDependencies  , University  ,   Degree  ,   FieldStudy  ,    CarrierLevel  ,     Interest  ,  YearsOfExperience  ,  JobTitle  , AboveManagerusername  ,
    Password  , EmployeeID  , BasicSalary  , Allowance  , Mobile  ) {
    var request = JSON.stringify
      ({
  "username": username,
  "AdderUsername": AdderUsername , 
  "Name":Name   ,
  "NumberOfAnnualVacations" : NumberOfAnnualVacations  ,
  "NumberOfCasualVacations": NumberOfCasualVacations ,  
  "Gender":Gender  ,
  "Email": Email , 
  "Address":Address  ,   
  "Nationality":Nationality  , 
  "SocialStatus" :SocialStatus, 
  "NumberOfDependencies" :NumberOfDependencies ,
  "University" :  University,  
   "Degree" : Degree ,  
  "FieldStudy" :FieldStudy ,   
  "CarrierLevel" : CarrierLevel ,    
  "Interest" :Interest  ,  
  "YearsOfExperience" :YearsOfExperience  , 
  "JobTitle" : JobTitle,
   "AboveManagerusername" :AboveManagerusername  ,
  "Password" : Password ,
    "EmployeeID" : EmployeeID,
    "BasicSalary" :BasicSalary  , 
    "Allowance":Allowance  , 
    "Mobile" : Mobile
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "AddManagerEmployee", request).timeout(config.getTimeout).subscribe(res => {
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
  AddRegularEmployee(   AdderUsername   , username  , Name   , NumberOfAnnualVacations  , NumberOfCasualVacations  ,  Gender  , Email  ,  Address  ,   Nationality  , 
    SocialStatus  ,  NumberOfDependencies  , University  ,   Degree  ,   FieldStudy  ,    CarrierLevel  ,     Interest  ,  YearsOfExperience  ,  JobTitle  , AboveManagerusername  ,
    Password  , EmployeeID  , BasicSalary  , Allowance  , Mobile  ) {
    var request = JSON.stringify
      ({
  "username": username,
  "AdderUsername": AdderUsername , 
  "Name":Name   ,
  "NumberOfAnnualVacations" : NumberOfAnnualVacations  ,
  "NumberOfCasualVacations": NumberOfCasualVacations ,  
  "Gender":Gender  ,
  "Email": Email , 
  "Address":Address  ,   
  "Nationality":Nationality  , 
  "SocialStatus" :SocialStatus, 
  "NumberOfDependencies" :NumberOfDependencies ,
  "University" :  University,  
   "Degree" : Degree ,  
  "FieldStudy" :FieldStudy ,   
  "CarrierLevel" : CarrierLevel ,    
  "Interest" :Interest  ,  
  "YearsOfExperience" :YearsOfExperience  , 
  "JobTitle" : JobTitle,
   "AboveManagerusername" :AboveManagerusername  ,
  "Password" : Password ,
    "EmployeeID" : EmployeeID,
    "BasicSalary" :BasicSalary  , 
    "Allowance":Allowance  , 
    "Mobile" : Mobile
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "AddRegularEmployee", request).timeout(config.getTimeout).subscribe(res => {
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
