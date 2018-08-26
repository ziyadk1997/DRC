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

  doLogin(email, password) { // done
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

  ApplyAnnualandCasualLeaveRequest(username, from , to,comment, timeinday,type) { // done
    var request = JSON.stringify
      ({
        "username": username,
        "from": from,
        "to" : to,
        "comment" : comment,
        "timeinday" : timeinday,
        "type" : type
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
  ApplyWorkFromHomeRequest(username, comment, Startdate,Enddate) {
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
  ApplySickRequest(username, Startdate,Enddate,comment,Link,timeinday) {
    var request = JSON.stringify
      ({
        "username": username,
        "Startdate": Startdate,
        "Enddate" : Enddate,
        "Comment" : comment,
        "Link":Link,
       "timeinday":timeinday

      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApplySickRequest", request).timeout(config.getTimeout).subscribe(res => {
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

  ApproveAnnualLeaveRequest(username, from , to,comment) {
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
  ApproveRequest(reviewerusername, requestid) {
    var request = JSON.stringify
      ({
        "reviewerusername": reviewerusername,
         "requestid" : requestid
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "ApproveRequest", request).timeout(config.getTimeout).subscribe(res => {
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
  
  
  ViewRequestbyId(requestid) {
    var request = JSON.stringify
      ({
        "username": requestid,
  

      });

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewRequestbyId/"+requestid).timeout(config.getTimeout).subscribe(res => {
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
  ViewMyWorkFromHomeRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewMyWorkFromHomeRequests/"+username).timeout(config.getTimeout).subscribe(res => {
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
  ViewMyAnnualRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewMyAnnualRequests/"+username).timeout(config.getTimeout).subscribe(res => {
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
  ViewMyCasualRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewMyCasualRequests/"+username).timeout(config.getTimeout).subscribe(res => {
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
  ViewMySickRequests(username) {
    var request = JSON.stringify
      ({
        "username": username,
  

      });

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewMySickRequests/"+username).timeout(config.getTimeout).subscribe(res => {
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
   

    return new Promise((resolve, reject) => {
      this.http.get(config.apiUrl + "ViewMyReviewedRequests/"+username).timeout(config.getTimeout).subscribe(res => {
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
  
  RejectRequest(reviewerusername, requestid,comment) {
    var request = JSON.stringify
      ({
        "reviewerusername": reviewerusername,
         "requestid" : requestid,
         "comment" :comment
      });

    return new Promise((resolve, reject) => {
      this.http.post(config.apiUrl + "RejectRequest", request).timeout(config.getTimeout).subscribe(res => {
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
IsHr(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "IsHr", user).timeout(config.getTimeout).subscribe(res => {
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
IsManager(username){
  var user=JSON.stringify({
    "username" : username
  });
  
  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "IsManager", user).timeout(config.getTimeout).subscribe(res => {
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
IsOwner(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "IsOwner", user).timeout(config.getTimeout).subscribe(res => {
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
IsAdmin(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "IsAdmin", user).timeout(config.getTimeout).subscribe(res => {
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

ViewMyTransactions(username){
  var user=JSON.stringify({
    "username" :username
  });
  return new Promise((resolve, reject) => {
    this.http.get(config.apiUrl + "ViewMyTransactions/"+username).timeout(config.getTimeout).subscribe(res => {
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
ViewMyExpenses(username){
  var user=JSON.stringify({
    "username" :username
  });
  return new Promise((resolve, reject) => {
    this.http.get(config.apiUrl + "ViewMyExpenses/"+username).timeout(config.getTimeout).subscribe(res => {
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

AddAdmin(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "MakeAdmin", user).timeout(config.getTimeout).subscribe(res => {
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
RemoveAdmin(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "RemoveAdmin", user).timeout(config.getTimeout).subscribe(res => {
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
RemoveEmployee(username){
  var user=JSON.stringify({
    "username" : username
  });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "RemoveUser", user).timeout(config.getTimeout).subscribe(res => {
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
ViewMyVacations(username){
  var user=JSON.stringify({
    "username" :username
  });
  return new Promise((resolve, reject) => {
    this.http.get(config.apiUrl + "ViewMyVacations/"+username).timeout(config.getTimeout).subscribe(res => {
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
GetAllEmployees(){
  return new Promise((resolve, reject) => {
    this.http.get(config.apiUrl + "GetAllEmployees").timeout(config.getTimeout).subscribe(res => {
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
ViewMySalary(username) {


  return new Promise((resolve, reject) => {
    this.http.get(config.apiUrl + "ViewMySalary/"+username).timeout(config.getTimeout).subscribe(res => {
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
ApplyFundRequest(username, comment,Amount,Duedate,Currency ) { 
  var request = JSON.stringify
    ({
      "username": username,
      "Amount" : Amount,
      "Comment" : comment,
      "Duedate" : Duedate,
      "Currency" : Currency,
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "ApplyFundRequest", request).timeout(config.getTimeout).subscribe(res => {
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


CreateNewUser(Employee ) { 
  var request = JSON.stringify
    ({
      "Employee": Employee,
      
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "CreateNewUser", request).timeout(config.getTimeout).subscribe(res => {
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
ApproveFundRequest(reviewerusername, requestid) {
  var request = JSON.stringify
    ({
      "reviewerusername": reviewerusername,
       "requestid" : requestid
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "ApproveFundRequest", request).timeout(config.getTimeout).subscribe(res => {
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



AddNewSkill(userName ,NewSkillName,Profeciency,Interest,YearsOfExperience ) { 
  var request = JSON.stringify
    ({
     "userName" :userName,
      "NewSkillName":NewSkillName,
     "Profeciency": Profeciency,
      "Interest": Interest,
      "YearsOfExperience":YearsOfExperience 
      
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "AddNewSkill", request).timeout(config.getTimeout).subscribe(res => {
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

AddNewEducation(userName, SchoolOrUniversity,FieldOfStudy,Degree,Grade,Activities){ 
  var request = JSON.stringify
    ({
     "userName" :userName,
      "SchoolOrUniversity":SchoolOrUniversity,
     "FieldOfStudy": FieldOfStudy,
      "Degree": Degree,
      "Grade":Grade ,
      "Activities":Activities
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "AddNewEducation", request).timeout(config.getTimeout).subscribe(res => {
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

AddNewLanguage(userName, LanguageName,Reading,Writing,Listening,Speaking,Justification){ 
  var request = JSON.stringify
    ({
     "userName" :userName,
     "LanguageName":LanguageName,
     "Reading":Reading,
     "Writing":Writing,
     "Listening":Listening,
     "Speaking":Speaking,
     "Justification":Justification
    });

  return new Promise((resolve, reject) => {
    this.http.post(config.apiUrl + "AddNewLanguage", request).timeout(config.getTimeout).subscribe(res => {
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

