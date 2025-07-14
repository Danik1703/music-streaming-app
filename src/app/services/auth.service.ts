import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    const storedUsers = localStorage.getItem('users');
    const storedUser = localStorage.getItem('currentUser');

    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  register(user: User): Observable<User> {
    const exists = this.users.some(u => u.email === user.email);
    if (exists) {
      return throwError(() => new Error('Користувач з таким email вже існує'));
    }
    this.users.push(user);
    this.currentUser = user;

    this.saveToLocalStorage();

    return of(user).pipe(delay(1000));
  }

  login(email: string, password: string): Observable<User> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) {
      return throwError(() => new Error('Невірний email або пароль'));
    }

    this.currentUser = user;
    this.saveToLocalStorage();

    return of(user).pipe(delay(1000));
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}
