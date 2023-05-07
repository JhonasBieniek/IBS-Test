import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public loading = new BehaviorSubject<boolean>(false);
  public hasSended = new BehaviorSubject<boolean>(false);

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
      const url = 'http://localhost:3000/send-email';
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
      const url = 'http://localhost:3000/auth/register';
      // setTimeout apenas para exibir melhor o loading
      this.http.post(url, data).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }

  getAllData(): Promise<any[]> {
    const url = 'http://localhost:3000/auth/';
    return this.http.get(url).toPromise()
      .then(response => {
        let allUser: any[] = [];
        allUser.push(response);
        return allUser;
      })
      .catch(error => {
        throw error;
      });
  }

  getOneData(id: string) {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/auth/single/' + id;
      this.http.get(url).subscribe((response) => {
        let allUser: any[] = [];
        allUser.push(response);
        resolve(allUser)
      }, (error) => {
        reject(false)
        console.log(error)
      })
    })
  }

  deleteUser(id: string) {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/auth/delete/' + id;
      this.http.delete(url).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }

  editUser(id: string, data: object) {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/auth/edit/' + id;
      this.http.patch(url, data).subscribe(() => {
        resolve(true)
      }, (error) => {
        reject(false)
      });
    })
  }
}
