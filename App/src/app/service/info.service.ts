import { Injectable } from '@angular/core';
import { Http , RequestOptions , Response  , Headers ,Request } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Infomation } from '../models/info';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'

@Injectable()
export class InfoService {
    
        private headers = new Headers({'Content-Type':'application/json'});
        private options = new RequestOptions;
    
        constructor(private http: Http) {
            this.options.headers = this.headers;
            this.options.withCredentials = true;
        }
      
        
        getInfomations() { 
            //Observable
             return this.http.post('http://localhost:8080/info/get-infos',this.options)
             .map((data: Response)=>data.json());
    
            // Promise
            // return this.http.post('http://localhost:8080/info/get-infos',this.options)
            // .toPromise()
            // .then((data:Response) =>data.json())
            // .catch(error=>console.log(error));
    
        }
    
        deleteInfo(info :Infomation) {
            return this.http.post('http://localhost:8080/info/delete-info', JSON.stringify(info),this.options)
           .toPromise()
           .then(()=>null)
           .catch(error=>console.log(error));
        }

        getInfoId(id : Number){
            console.log(JSON.stringify(id));
            return this.http.post('http://localhost:8080/info/get-info',JSON.stringify(id),this.options)
            .map((data:Response)=>data.json())
            
        }
    
        editInfo(info :Infomation){
        }

        addInfo(info : Infomation ) {
            return this.http.post('http://localhost:8080/info/add-info',JSON.stringify(info),this.options)
            .toPromise()
            .then(()=>null)
            .catch(error=>console.log(error));


            
         }

    }