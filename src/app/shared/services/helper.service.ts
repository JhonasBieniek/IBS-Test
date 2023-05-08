import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public loading = new BehaviorSubject<boolean>(false);
  public hasSended = new BehaviorSubject<boolean>(false);

  url: string = "http://localhost:3000/"

  constructor(
    private http: HttpClient,
  ) { }

  isLoading() {
    let value = this.loading.asObservable();
    return value;
  }

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  isSending() {
    let value = this.hasSended.asObservable();
    return value;
  }

  setSend(value: boolean) {
    this.hasSended.next(value);
  }

  sendEmail(data: Object) {
    return new Promise((resolve, reject) => {
      const url = `${this.url}send-email`;
      // setTimeout apenas para exibir melhor o loading
      setTimeout(() => {
        this.http.post(url, data).subscribe(() => {
          resolve(true)
        }, (error) => {
          reject(false)
        });
      }, 300)
    })
  }

  createUser(data: Object) {
    return new Promise((resolve, reject) => {
      const url = `${this.url}auth/register`;
      this.http.post(url, data).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }

  getAllData(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const url = `${this.url}auth/`;
      return this.http.get(url).subscribe((response: any) => {
        resolve(response);
      }, (err) => {
        reject(false)
      })
    })
  }

  getOneUser(id: string) {
    return new Promise<User>((resolve, reject) => {
      const url = `${this.url}auth/single/${id}`;
      this.http.get(url).subscribe((response: any) => {
        resolve(response)
      }, (error) => {
        reject(false)
      })
    })
  }

  deleteUser(id: string) {
    return new Promise((resolve, reject) => {
      const url = `${this.url}auth/delete/${id}`;
      this.http.delete(url).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }

  editUser(id: string, data: object) {
    return new Promise((resolve, reject) => {
      const url = `${this.url}auth/edit/${id}`;
      this.http.patch(url, data).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }
}
