import { Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: Http){}

    addShop(firstName: string, lastName: string, email: string, password: string){
        const body = JSON.stringify({first_name: firstName, last_name: lastName, email: email, password: password});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://laravel.loc/api/customer', body, {headers: headers});
    }

    getShop(): Observable<any>{
        return this.http.get('http://laravel.loc/api/products')
            .map(
                (response: Response) => {
                    return response.json().product;
                }
            );
    }

    findUser(email: string, password: any): Observable<any> {
        return this.http.get('http://laravel.loc/api/customer/'+email+'/'+password)
            .map(
                (response: Response) => {
                    return response.json().customer;
                }
            );
    }
}
